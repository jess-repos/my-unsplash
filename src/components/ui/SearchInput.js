import React from "react";

import "./SearchInput.css";

export default function SearchInput({
  type = "text",
  onChange,
  value,
  className,
  placeholder,
}) {
  return (
    <div className={`search-input ${className}`}>
      <label htmlFor="search-input">
        <i className="fas fa-search"></i>
      </label>
      <input
        id="search-input"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
