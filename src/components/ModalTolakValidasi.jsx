import { useState } from "react";

// Alasan umum yang bisa dipilih cepat
const alasanCepat = [
  "Wajah tidak terlihat jelas",
  "Pencahayaan kurang baik",
  "Bukan wajah siswa terdaftar",
  "Memakai masker/penutup wajah",
  "Foto tidak sesuai standar",
];

export default function ModalTolakValidasi({ isOpen, onClose, onConfirm, siswa, isLoading }) {
  const [alasan, setAlasan] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const data = siswa || {
    nama: "Achmad Shodiq",
    nis: "2601001",
    kelas: "7",
    avatarSeed: "AS",
  };

  const handleConfirm = () => {
    if (!alasan.trim()) {
      setError("Alasan penolakan wajib diisi.");
      return;
    }
    onConfirm(alasan);
    // Reset setelah kirim
    setTimeout(() => {
      setAlasan("");
      setError("");
    }, 500);
  };

  const handleClose = () => {
    setAlasan("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 max-h-[95vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6M9 9l6 6" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-wide text-red-600">
                KONFIRMASI PENOLAKAN
              </div>
              <h2 className="mt-1 text-lg font-extrabold text-gray-900">
                Tolak Validasi Wajah?
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-xs leading-relaxed text-gray-600">
            Menolak validasi akan membuat siswa{" "}
            <strong className="text-gray-900">mengulang pengambilan foto</strong>.
            Mohon berikan alasan yang jelas agar siswa dapat memperbaiki.
          </p>

          {/* Preview siswa */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700 text-base font-extrabold text-white shadow">
              {data.avatarSeed}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-gray-900">
                {data.nama}
              </p>
              <p className="truncate text-[10px] text-gray-500">
                NIS: {data.nis} • Kelas {data.kelas}
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-[9px] font-bold text-red-700">
              AKAN DITOLAK
            </span>
          </div>

          {/* Alasan cepat */}
          <div className="mt-4">
            <label className="mb-2 block text-[11px] font-bold text-gray-700">
              Pilih Alasan Cepat
            </label>
            <div className="flex flex-wrap gap-1.5">
              {alasanCepat.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setAlasan(a);
                    setError("");
                  }}
                  className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold transition ${
                    alasan === a
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Alasan textarea */}
          <div className="mt-3">
            <label className="mb-1 block text-[11px] font-bold text-gray-700">
              Alasan Penolakan <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              value={alasan}
              onChange={(e) => {
                setAlasan(e.target.value);
                setError("");
              }}
              placeholder="Tuliskan alasan penolakan secara detail agar siswa dapat memperbaiki..."
              className={`w-full resize-none rounded-lg border bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                error
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-red-500 focus:ring-red-500"
              }`}
            ></textarea>
            {error && (
              <p className="mt-1 flex items-center gap-1 text-[10px] font-medium text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                {error}
              </p>
            )}
          </div>

          {/* Warning */}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2 border-t border-gray-100 bg-gray-50/50 p-4">
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-70"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Menolak...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6M9 9l6 6" />
                </svg>
                Ya, Tolak Validasi
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}