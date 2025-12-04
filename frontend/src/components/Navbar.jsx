import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">

      {/* Title */}
      <h1 className="text-xl font-bold text-indigo-700">
        Inventory Management
      </h1>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200 transition">
          Dashboard
        </button>

        <button className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200 transition">
          Reports
        </button>

        <button className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition">
          Logout
        </button>
      </div>

    </nav>
  );
}
