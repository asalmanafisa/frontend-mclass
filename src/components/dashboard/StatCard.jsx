export default function StatCard({ label, value, unit, subtext, subColor = "text-gray-500", variant = "default", icon }) {
  const variants = {
    default: "border-gray-200 bg-white",
    success: "border-gray-200 bg-white",
    warning: "border-gray-200 bg-white",
    danger: "border-red-200 bg-red-50",
  };

  return (
    <div className={`rounded-xl border p-4 ${variants[variant]}`}>
      <div className="flex items-start justify-between">
        <p className="text-xs font-bold tracking-wide text-gray-700">
          {label}
        </p>
        <span className={variant === "danger" ? "text-red-500" : "text-emerald-500"}>
          {icon || (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )}
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-1.5">
        <span className={`text-3xl font-extrabold ${variant === "danger" ? "text-red-600" : "text-gray-900"}`}>
          {value}
        </span>
        {unit && (
          <span className="text-xs font-bold text-gray-500">{unit}</span>
        )}
      </div>

      <p className={`mt-1 text-xs ${subColor}`}>{subtext}</p>
    </div>
  );
}