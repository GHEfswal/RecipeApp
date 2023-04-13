import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search_section">
      <input
        className="search_field"
        type="text"
        placeholder="Search for a Recipe"
      />
      <button className="search_btn">Search</button>
    </div>
  );
}
