import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemTable from "./components/ItemTable";
import ItemForm from "./components/ItemForm";
import {
  getItems,
  addItemApi,
  updateItemApi,
  deleteItemApi,
} from "./api/itemsApi";
export default function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const data = await getItems();
    setItems(data);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const newItem = await addItemApi(formData);
    setItems([newItem, ...items]);
    resetForm();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updated = await updateItemApi(currentId, formData);
    setItems(items.map((it) => (it._id === currentId ? updated : it)));
    resetForm();
  };
  const handleDelete = async (id) => {
    await deleteItemApi(id);
    setItems(items.filter((it) => it._id !== id));
  };
  const handleEdit = (item) => {
    setFormData(item);
    setCurrentId(item._id);
    setIsEditing(true);
  };
  const resetForm = () => {
    setFormData({ name: "", quantity: "", price: "" });
    setIsEditing(false);
    setCurrentId(null);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="p-10 flex-1 max-w-6xl mx-auto">
        <ItemForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={isEditing ? handleUpdate : handleAdd}
          isEditing={isEditing}
        />
        <ItemTable items={items} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}
