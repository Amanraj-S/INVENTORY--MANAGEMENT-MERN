import React from "react";
import { Edit2, Trash2 } from "lucide-react";

export default function ItemTable({ items, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Qty</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No items found
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item._id || item.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4 text-green-700 font-semibold">${item.price}</td>

                <td className="p-4 text-right flex justify-end gap-4">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit2 size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(item._id || item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
