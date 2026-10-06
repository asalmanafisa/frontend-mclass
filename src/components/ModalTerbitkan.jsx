export default function ModalTerbitkan({ isOpen, onClose, onConfirm, data, isLoading }) {
  if (!isOpen) return null;

  const jenisLabel = {
    akademik: "Akademik",
    kegiatan: "Kegiatan",
    libur: "Libur / Cuti",
    penting: "Penting",
    prestasi: "Prestasi",
    info: "Info",
  };

  const targetLabel = {
    semua: "Semua",
    siswa: "Siswa",
    guru: "Guru",
    wali: "Wali Murid",
  };

  const prioritasStyles = {
    rendah: "bg-gray-100 text-gray-700",
    normal: "bg-blue-100 text-blue-700",
    penting: "bg-amber-100 text-amber-700",
    urgent: "bg-red-100 text-red-700",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700">
                KONFIRMASI PUBLIKASI
              </div>
              <h2 className="mt-1 text-lg font-extrabold text-gray-900">
                Terbitkan Pengumuman?
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
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
            Pengumuman akan langsung dikirimkan ke seluruh audiens yang dipilih
            dan tampil di halaman utama mereka. Pastikan data di bawah sudah benar
            sebelum dipublikasikan.
          </p>

          {/* Preview Card */}
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                {jenisLabel[data.jenis] || data.jenis}
              </span>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                prioritasStyles[data.prioritas] || "bg-gray-100 text-gray-700"
              }`}>
                {data.prioritas
                  ? data.prioritas.charAt(0).toUpperCase() + data.prioritas.slice(1)
                  : "-"}
              </span>
            </div>

            <h4 className="mt-2 text-sm font-bold text-gray-900">
              {data.judul || <span className="italic text-gray-400">(Judul belum diisi)</span>}
            </h4>

            <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
              {data.deskripsi || (
                <span className="italic">(Deskripsi belum diisi)</span>
              )}
            </p>

            {/* Metadata */}
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3 text-[10px]">
              <div className="flex items-start gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-3 w-3 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <div>
                  <p className="text-gray-500">Tanggal Publikasi</p>
                  <p className="mt-0.5 font-semibold text-gray-800">
                    {data.tanggal
                      ? new Date(data.tanggal).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "-"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-3 w-3 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <p className="text-gray-500">Target Audiens</p>
                  <p className="mt-0.5 font-semibold text-gray-800">
                    {targetLabel[data.target] || data.target}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
            <p className="text-[10px] leading-relaxed text-amber-800">
              Pengumuman yang sudah diterbitkan <strong>tidak dapat ditarik kembali</strong> tanpa konfirmasi Super Admin. Periksa kembali konten sebelum melanjutkan.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2 border-t border-gray-100 bg-gray-50/50 p-4">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-70"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-800 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Menerbitkan...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Ya, Terbitkan Sekarang
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}