import { useState } from "react";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  const [rememberPrefs, setRememberPrefs] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      if (onConfirm) onConfirm();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" x2="12" y1="2" y2="12" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
                Konfirmasi Keamanan Sesi • MTs Al-Ma'arif
              </div>
              <h2 className="mt-1 text-lg font-extrabold text-gray-900">
                Keluar dari Sistem Presensi?
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="Tutup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-xs leading-relaxed text-gray-600">
          </p>

          {/* User Info Card */}
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xs font-bold text-white">
                AF
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900">
                  Ust. H. Ahmad Fauzi, S.Pd
                </p>
                <p className="text-[10px] text-gray-500">
                  Guru Piket & Admin Presensi Harian
                </p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Sesi Berjalan
              </span>
            </div>

            {/* Session Detail */}
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3 text-[10px]">
              <div className="flex items-start gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 h-3 w-3 shrink-0 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="text-gray-500">Durasi Sesi</p>
                  <p className="mt-0.5 font-semibold text-gray-800">
                    Aktif sejak 06:30 WIB (7 jam 45 menit)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 h-3 w-3 shrink-0 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
                <div>
                  <p className="text-gray-500">Perangkat & Jaringan</p>
                  <p className="mt-0.5 font-semibold text-gray-800">
                    Lab Komputer • 192.168.1.45
                  </p>
                </div>
              </div>
            </div>

            {/* Status Sinkronisasi */}
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="text-[10px] leading-relaxed text-emerald-800">
                <strong>Semua rekaman presensi hari ini (270 Santri)</strong>{" "}
                telah tersinkronisasi ke Cloud Kemenag & SIMPATIKA.
                <br />
                Status antrean lokal: <strong>0 antrean tertunda (Aman).</strong>
              </p>
            </div>
          </div>

          {/* Remember Preferences */}
          <label className="mt-4 flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={rememberPrefs}
              onChange={(e) => setRememberPrefs(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-[11px] text-gray-700">
              Ingat preferensi filter dan perangkat ini untuk login berikutnya
            </span>
          </label>

          {/* Security Warning */}
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
            <p className="text-[10px] leading-relaxed text-amber-800">
              <strong>Prosedur Keamanan Madrasah:</strong> Selalu lakukan logout
              secara terpisah oleh petugas di komputer laboratorium atau
              kelas bersama untuk mencegah penyalahgunaan akun dari pihak lain.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2 border-t border-gray-100 bg-gray-50/50 p-4">
          <button
            onClick={onClose}
            disabled={isLoggingOut}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-70"
          >
            Tetap Masuk
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoggingOut}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-800 disabled:opacity-70"
          >
            {isLoggingOut ? (
              <>
                <svg
                  className="h-3.5 w-3.5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Keluar...
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                Ya, Keluar Sekarang
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}