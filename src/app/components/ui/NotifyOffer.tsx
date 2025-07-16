'use client';
import { useMemo, useState } from "react";

const NotifyOffer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const next20Days = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      className="bg-green-100 text-green-800 p-3 text-center flex justify-between items-center"
    >
      <span>🎉 Special Offer: <strong>20%</strong> off all products until {next20Days}!</span>
      <button
        onClick={handleClose}
        className="ml-4 text-xl font-bold focus:outline-none"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  )
}

export default NotifyOffer