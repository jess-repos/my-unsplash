import React from "react";

import "./Button.css";

export default function Button({
  onClick,
  children,
  className,
  type = "button",
  variant = "primary",
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant}  ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
