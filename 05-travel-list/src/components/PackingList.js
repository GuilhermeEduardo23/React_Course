import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));

  if (sortBy === "packed") sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));

  return <div className="list">
    <ul>
      {sortedItems.map(item => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem} />
      ))}
    </ul>

    <div className="actions">
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={clearList}>Clear list</button>
    </div>
  </div>;
}
