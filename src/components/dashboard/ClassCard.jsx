export default function ClassCard({ className, totalStudents, present, absent, percent, note }) {
  const isWarning = percent < 100;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-gray-900">{className}</h4>
        <span className={`text-xs font-semibold ${isWarning ? "text-amber-600" : "text-gray-500"}`}>
          {isWarning ? "Perlu Cek" : "Kelas Ini"}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-gray-900">
          {present}
          <span className="text-sm font-medium text-gray-400"> / {totalStudents}</span>
        </span>
        <span
          className={`rounded-md px-2 py-0.5 text-xs font-bold ${
            isWarning
              ? "bg-amber-100 text-amber-700"
              : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {percent}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-[10px] text-gray-500">
          <span>{percent}% Hadir</span>
          <span>{absent} Alpa</span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full ${isWarning ? "bg-amber-500" : "bg-emerald-500"}`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Badge note */}
      {note && (
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            {note}
          </span>
        </div>
      )}

      <button className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
        Lihat Detail Presensi
      </button>
    </div>
  );
}