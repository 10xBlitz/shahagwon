import React from "react";

interface DialogProps {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen?: boolean;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "danger";
}

export function Dialog({
  title,
  message,
  onCancel,
  onConfirm,
  isOpen = true,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
}: DialogProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
      onClick={handleBackdropClick}
    >
      <div className="mx-4 w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl transition-all">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">{message}</p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`rounded-md px-4 py-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
              variant === "danger"
                ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
