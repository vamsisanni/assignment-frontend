import React, { useEffect, useMemo, useState } from "react";
import "./HomePage.css";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "https://assignment-backend-ten.vercel.app"
).replace(/\/$/, "");

const today = new Date().toISOString().slice(0, 10);

const emptyItem = {
  name: "",
  item_type_id: "",
  stock_available: true
};

function HomePage() {
  const [itemTypes, setItemTypes] = useState([]);
  const [items, setItems] = useState([]);
  const [purchaseDate, setPurchaseDate] = useState(today);
  const [formItems, setFormItems] = useState([{ ...emptyItem }]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [alert, setAlert] = useState({ type: "", text: "" });

  const request = async (path, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(
        data?.errors?.join(", ") ||
          data?.message ||
          "Something went wrong. Please try again."
      );
    }

    return data;
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const [typesResult, itemsResult] = await Promise.all([
        request("/api/item-types"),
        request("/api/items")
      ]);

      setItemTypes(typesResult.data || []);
      setItems(itemsResult.data || []);
    } catch (error) {
      setAlert({
        type: "error",
        text: error.message || "Unable to load data."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalItems = items.length;

  const availableItems = useMemo(() => {
    return items.filter((item) => item.stock_available).length;
  }, [items]);

  const unavailableItems = useMemo(() => {
    return items.filter((item) => !item.stock_available).length;
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const value = searchText.trim().toLowerCase();

      const matchesSearch =
        !value ||
        item.item_name?.toLowerCase().includes(value) ||
        item.item_type?.toLowerCase().includes(value) ||
        item.purchase_date?.toLowerCase().includes(value);

      const matchesType =
        typeFilter === "all" || String(item.item_type_id) === String(typeFilter);

      const matchesStock =
        stockFilter === "all" ||
        (stockFilter === "available" && item.stock_available) ||
        (stockFilter === "unavailable" && !item.stock_available);

      return matchesSearch && matchesType && matchesStock;
    });
  }, [items, searchText, typeFilter, stockFilter]);

  const updateFormItem = (index, field, value) => {
    setFormItems((prev) =>
      prev.map((item, currentIndex) =>
        currentIndex === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addItemRow = () => {
    setFormItems((prev) => [...prev, { ...emptyItem }]);
  };

  const removeItemRow = (index) => {
    setFormItems((prev) => {
      if (prev.length === 1) {
        return prev;
      }

      return prev.filter((_, currentIndex) => currentIndex !== index);
    });
  };

  const resetForm = () => {
    setEditingItemId(null);
    setPurchaseDate(today);
    setFormItems([{ ...emptyItem }]);
  };

  const validateForm = () => {
    if (!purchaseDate) {
      return "Purchase date is required.";
    }

    for (let index = 0; index < formItems.length; index += 1) {
      if (!formItems[index].name.trim()) {
        return `Item name is required in row ${index + 1}.`;
      }

      if (!formItems[index].item_type_id) {
        return `Item type is required in row ${index + 1}.`;
      }
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationMessage = validateForm();

    if (validationMessage) {
      setAlert({ type: "error", text: validationMessage });
      return;
    }

    try {
      setSaving(true);
      setAlert({ type: "", text: "" });

      if (editingItemId) {
        const item = formItems[0];

        await request(`/api/items/${editingItemId}`, {
          method: "PUT",
          body: JSON.stringify({
            name: item.name.trim(),
            item_type_id: Number(item.item_type_id),
            purchase_date: purchaseDate,
            stock_available: Boolean(item.stock_available)
          })
        });

        setAlert({ type: "success", text: "Item updated successfully." });
      } else {
        await request("/api/purchases", {
          method: "POST",
          body: JSON.stringify({
            purchase_date: purchaseDate,
            items: formItems.map((item) => ({
              name: item.name.trim(),
              item_type_id: Number(item.item_type_id),
              stock_available: Boolean(item.stock_available)
            }))
          })
        });

        setAlert({ type: "success", text: "Items added successfully." });
      }

      resetForm();
      await loadData();
    } catch (error) {
      setAlert({
        type: "error",
        text: error.message || "Unable to save item."
      });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItemId(item.id);
    setPurchaseDate(item.purchase_date || today);
    setFormItems([
      {
        name: item.item_name || "",
        item_type_id: item.item_type_id || "",
        stock_available: Boolean(item.stock_available)
      }
    ]);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");

    if (!confirmed) {
      return;
    }

    try {
      setSaving(true);
      setAlert({ type: "", text: "" });

      await request(`/api/items/${id}`, {
        method: "DELETE"
      });

      setAlert({ type: "success", text: "Item deleted successfully." });

      if (editingItemId === id) {
        resetForm();
      }

      await loadData();
    } catch (error) {
      setAlert({
        type: "error",
        text: error.message || "Unable to delete item."
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="home-page">
      <section className="page-header">
        <div>
          <span className="badge">Inventory Manager</span>
          <h1>Purchase Item Management</h1>
          <p>Add purchase items, track stock status, and manage records easily.</p>
        </div>
      </section>

      <section className="summary-grid">
        <div className="summary-card">
          <span>Total Items</span>
          <strong>{totalItems}</strong>
        </div>

        <div className="summary-card">
          <span>Available</span>
          <strong>{availableItems}</strong>
        </div>

        <div className="summary-card">
          <span>Not Available</span>
          <strong>{unavailableItems}</strong>
        </div>
      </section>

      <section className="form-section">
        <div className="section-title">
          <div>
            <span className="badge light">{editingItemId ? "Edit Item" : "New Entry"}</span>
            <h2>{editingItemId ? "Update Item" : "Add Purchase Items"}</h2>
          </div>

          {editingItemId && (
            <button type="button" className="outline-button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>

        {alert.text && (
          <div className={`alert ${alert.type === "success" ? "success" : "error"}`}>
            {alert.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="item-form">
          <div className="date-card">
            <label htmlFor="purchaseDate">Purchase Date</label>
            <input
              id="purchaseDate"
              type="date"
              value={purchaseDate}
              onChange={(event) => setPurchaseDate(event.target.value)}
            />
          </div>

          <div className="item-list">
            {formItems.map((item, index) => (
              <div className="item-card" key={index}>
                <div className="item-card-header">
                  <h3>{editingItemId ? "Item Details" : `Item ${index + 1}`}</h3>

                  {!editingItemId && formItems.length > 1 && (
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => removeItemRow(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="field-grid">
                  <div className="field-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      value={item.name}
                      placeholder="Enter item name"
                      onChange={(event) =>
                        updateFormItem(index, "name", event.target.value)
                      }
                    />
                  </div>

                  <div className="field-group">
                    <label>Item Type</label>
                    <select
                      value={item.item_type_id}
                      onChange={(event) =>
                        updateFormItem(index, "item_type_id", event.target.value)
                      }
                    >
                      <option value="">Select item type</option>
                      {itemTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.type_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label className="stock-toggle">
                  <input
                    type="checkbox"
                    checked={Boolean(item.stock_available)}
                    onChange={(event) =>
                      updateFormItem(index, "stock_available", event.target.checked)
                    }
                  />
                  <span>Stock Available</span>
                </label>
              </div>
            ))}
          </div>

          <div className="form-actions">
            {!editingItemId && (
              <button type="button" className="outline-button" onClick={addItemRow}>
                Add Another Item
              </button>
            )}

            <button type="submit" className="primary-button" disabled={saving}>
              {saving ? "Saving..." : editingItemId ? "Update Item" : "Submit Items"}
            </button>
          </div>
        </form>
      </section>

      <section className="table-section">
        <div className="section-title table-title">
          <div>
            <span className="badge light">Records</span>
            <h2>Submitted Items</h2>
          </div>

          <button type="button" className="outline-button" onClick={loadData}>
            Refresh
          </button>
        </div>

        <div className="filters">
          <input
            type="text"
            value={searchText}
            placeholder="Search item, type, or date"
            onChange={(event) => setSearchText(event.target.value)}
          />

          <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
            <option value="all">All Types</option>
            {itemTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.type_name}
              </option>
            ))}
          </select>

          <select value={stockFilter} onChange={(event) => setStockFilter(event.target.value)}>
            <option value="all">All Stock</option>
            <option value="available">Available</option>
            <option value="unavailable">Not Available</option>
          </select>
        </div>

        {loading ? (
          <div className="empty-state">Loading items...</div>
        ) : filteredItems.length === 0 ? (
          <div className="empty-state">No items found.</div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Type</th>
                  <th>Purchase Date</th>
                  <th>Stock Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td data-label="Item Name">{item.item_name}</td>
                    <td data-label="Item Type">{item.item_type}</td>
                    <td data-label="Purchase Date">{item.purchase_date}</td>
                    <td data-label="Stock Status">
                      <span
                        className={`status-pill ${
                          item.stock_available ? "available" : "unavailable"
                        }`}
                      >
                        {item.stock_available ? "Available" : "Not Available"}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="row-actions">
                        <button
                          type="button"
                          className="edit-button"
                          onClick={() => handleEdit(item)}
                        >
                          Update
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default HomePage;