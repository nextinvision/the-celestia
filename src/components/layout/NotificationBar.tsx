import React, { useState } from "react";

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            className="fixed top-0 left-0 right-0 z-[510] bg-gradient-to-r from-[#8B7355] via-[#A68968] to-[#8B7355] text-white py-2.5 px-4 shadow-md"
            style={{
                animation: "slideDown 0.5s ease-out",
            }}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex flex-col sm:flex-row items-center justify-center flex-1 gap-2 text-center">
                    <span className="text-xs sm:text-sm md:text-base font-medium leading-tight">
                        ✨ <span className="inline">Special Offer:</span> Book your first session and get 20% off! <br className="sm:hidden" /> Use code: <span className="font-bold bg-white/20 px-2 py-0.5 rounded whitespace-nowrap">CELESTIA20</span>
                    </span>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-4 text-white hover:text-white/80 transition-colors flex-shrink-0"
                    aria-label="Close notification"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default NotificationBar;
