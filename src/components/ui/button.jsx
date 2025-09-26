import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-lg border px-4 py-2 shadow-sm transition hover:bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
