import { useEffect } from "react";

export default function Toast({ isOpen, onClose, title, message, type = "success", duration = 3000 }) {
  // Auto close setelah duration
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const styles = {
    success: {
      border: "border-emerald-200",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-600",
      iconColor: "text-white",
      title: "text-emerald-800",
      message: "text-emerald-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
    error: {
      border: "border-red-200",
      bg: "bg-red-50",
      iconBg: "bg-red-600",
      iconColor: "text-white",
      title: "text-red-800",
      message: "text-red-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      ),
    },
    info: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      iconBg: "bg-blue-600",
      iconColor: "text-white",
      title: "text-blue-800",
      message: "text-blue-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
    warning: {
      border: "border-amber-200",
      bg: "bg-amber-50",
      iconBg: "bg-amber-500",
      iconColor: "text-white",
      title: "text-amber-800",
      message: "text-amber-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" x2="12" y1="9" y2="13" />
          <line x1="12" x2="12.01" y1="17" y2="17" />
        </svg>
      ),
    },
  };

  const style = styles[type] || styles.success;

  return (
    <div className="fixed right-4 top-4 z-[100] w-full max-w-sm animate-slide-in">
      <div className={`flex items-start gap-3 rounded-xl border ${style.border} ${style.bg} p-4 shadow-lg backdrop-blur-sm`}>
        {/* Icon */}
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor} shadow-sm`}>
          {style.icon}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pt-0.5">
          <p className={`text-sm font-bold ${style.title}`}>{title}</p>
          {message && (
            <p className={`mt-0.5 text-xs leading-relaxed ${style.message}`}>
              {message}
            </p>
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className={`shrink-0 rounded-md p-1 transition hover:bg-white/50 ${style.message}`}
          aria-label="Tutup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}