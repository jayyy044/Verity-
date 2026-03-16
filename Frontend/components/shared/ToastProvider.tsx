"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="#f59e0b" strokeWidth="1.5"/>
    <path d="M5.5 9L7.5 11L12.5 7" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ErrorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="#e05252" strokeWidth="1.5"/>
    <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke="#e05252" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop
      closeOnClick
      pauseOnHover
      icon={({ type }) => {
        if (type === "success") return <SuccessIcon />;
        if (type === "error") return <ErrorIcon />;
        return null;
      }}
    />
  );
}