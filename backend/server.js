const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Item = require("./models/Item");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/inventoryManagementDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// Get all items
app.get("/api/items", async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

// Add item
app.post("/api/items", async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

// Update item
app.put("/api/items/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// Delete item
app.delete("/api/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});


app.listen(5000, () => console.log("Server running on port 5000"));
