import React from "react";

import "./Input.css";

export default function Input({
  type = "text",
  onChange,
  value,
  className,
  placeholder,
  label,
  id,
}) {
  return (
    <div className={`input-control ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
