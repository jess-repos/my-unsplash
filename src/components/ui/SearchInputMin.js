import React, { useState } from "react";

import "./SearchInputMin.css";

export default function SearchInputMin({
  type = "text",
  onChange,
  value,
  className,
  placeholder,
}) {
  const [isSearchInputMinOpen, setIsSearchInputMinOpen] = useState(false);
  return (
    <div className={`search-input-min ${className}`}>
      {!isSearchInputMinOpen ? (
        <i
          className="fas fa-search-plus"
          onClick={(e) => setIsSearchInputMinOpen(!isSearchInputMinOpen)}
        ></i>
      ) : (
        <i
          className="fas fa-search-minus"
          onClick={(e) => setIsSearchInputMinOpen(!isSearchInputMinOpen)}
        ></i>
      )}
      {isSearchInputMinOpen && (
        <div className="search-input-min__control">
          <input
            id="search-input"
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
        </div>
      )}
    </div>
  );
}
