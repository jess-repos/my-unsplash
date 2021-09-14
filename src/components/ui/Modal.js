import React from "react";
import reactDom from "react-dom";

import "./Modal.css";

export default function Modal({ children, show, onHide, className }) {
  if (!show) return null;
  return reactDom.createPortal(
    <div className={`modal ${className}`}>
      <div className="modal-overlay" onClick={onHide}></div>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
