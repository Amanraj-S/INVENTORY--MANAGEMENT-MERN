import React from "react";
import { Plus } from "lucide-react";

export default function ItemForm({
  formData,
  setFormData,
  onSubmit,
  isEditing,
}) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 mb-12">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
        <Plus size={24} />
        {isEditing ? "Edit Item" : "Add New Item"}
      </h2>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-6">

        {/* Row 1: Name + Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm font-medium text-gray-700">Item Name</label>
            <input
              className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500
                         transition text-gray-800"
              placeholder="Enter item name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500
                         transition text-gray-800"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              required
              min="0"
            />
          </div>

        </div>

        {/* Row 2: Price full width */}
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500
                       transition text-gray-800"
            placeholder="Enter price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
            min="0"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-2.5 bg-indigo-600 text-white rounded-lg text-sm md:text-base 
                       font-semibold hover:bg-indigo-700 active:scale-95 
                       transition-all shadow-sm"
          >
            {isEditing ? "Update Item" : "Add Item"}
          </button>
        </div>

      </form>
    </div>
  );
}
