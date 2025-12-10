import React, { useState } from "react";

function DropdownBox({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* The button */}
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} {title}
      </button>

      {/* The dropdown content */}
      {open && (
        <div
          style={{
            padding: "10px",
            border: "1px solid gray",
            marginTop: "5px",
          }}
        >
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>  // map for dropdown items
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownBox;