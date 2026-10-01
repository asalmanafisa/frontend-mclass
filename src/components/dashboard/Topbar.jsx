export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-2.5">
      {/* Kiri: Logo M-Class + Badge */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-bold text-gray-900">M-Class</h1>
            <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white">
              MTS AL-MA'ARIF
            </span>
          </div>
          <p className="text-[10px] text-gray-500">
            Sistem Presensi Digital & Verifikasi Geospasial
          </p>
        </div>
      </div>

      {/* Kanan: Status & Buttons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500 bg-emerald-50 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-semibold text-emerald-700">
            Sistem Presensi Aktif
          </span>
        </div>

        <button className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          Sabtu, 07:30 WIB • Sesi Pagi
        </button>




      </div>
    </header>
  );
}