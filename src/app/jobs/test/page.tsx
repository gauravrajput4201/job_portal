"use client";

import useStore from "@/store/store";
import { useState } from "react";
// import useStore from "../store/store";

export default function Test() {
  const [newItem, setNewItem] = useState<string>(""); // Type the state

  // Zustand hooks
  const items = useStore((state: { items: any }) => state.items);
  const addItem = useStore((state: { addItem: any }) => state.addItem);
  const removeItem = useStore((state: { removeItem: any }) => state.removeItem);
  const setItems = useStore((state: { setItems: any }) => state.setItems);

  const handleAddItem = () => {
    console.log(items, "itemsitemsitems");

    if (newItem.trim() !== "") {
      if (!items.includes(newItem)) {
        addItem(newItem);
      }
      setNewItem("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Zustand Global State in TypeScript</h1>

      {/* Input Field */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleAddItem} style={{ padding: "5px 10px" }}>
          Add Item
        </button>
      </div>

      {/* Item List */}
      <ul>
        {items.map((item: any, index: number) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => removeItem(item)}
              style={{
                marginLeft: "10px",
                padding: "2px 5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Clear All Button */}
      {items.length > 0 && (
        <button
          onClick={() => setItems([])}
          style={{ marginTop: "20px", padding: "5px 10px" }}
        >
          Clear All
        </button>
      )}
    </div>
  );
}
