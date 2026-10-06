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
      



      </div>
    </header>
  );
}