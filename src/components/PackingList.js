import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClickClearItems,
}) {
  const [sortBy, setSortby] = useState("description");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* Render the list based on sortedItem instead of items */}
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed stats</option>
        </select>
        <button onClick={() => onClickClearItems([])}>Clear list </button>
      </div>
    </div>
  );
}
