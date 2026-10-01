export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-gray-500 md:flex-row">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>
            <span className="font-semibold text-gray-700">Geolokasi Aktif:</span>{" "}
            Kampus MTs Al-Ma'arif Ponorogo (50m)
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>© 2026 MTs Al-Ma'arif O2 Singosari</span>
          <span className="hidden md:inline">•</span>
          <span>Sistem Presensi Digital Terpadu</span>
          <a href="#" className="hover:text-gray-700">Bantuan Teknis</a>
          <a href="#" className="hover:text-gray-700">Kebijakan Privasi</a>
          <div className="flex items-center gap-1.5 text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-medium">Server Terhubung</span>
          </div>
        </div>
      </div>
    </footer>
  );
}