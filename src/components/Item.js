import React, { useState } from "react";

function Item({ name, category }) {
  const [added, setAdded] = useState(false);
  const itemClass = added ? "remove" : "add";
  const liClass = added ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={itemClass}
        value={added}
        onClick={() => {
          setAdded(!added);
        }}
      >
        {added ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
