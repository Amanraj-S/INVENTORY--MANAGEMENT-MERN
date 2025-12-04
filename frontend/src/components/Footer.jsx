import React from "react";
export default function Footer() {
  return (
    <footer className="w-full text-center py-3 text-gray-600 text-sm bg-transparent">
      © {new Date().getFullYear()} Inventory Management — All Rights Reserved
    </footer>
  );
}
