import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";
import ModalSetujuiValidasi from "./ModalSetujuiValidasi";
import ModalTolakValidasi from "./ModalTolakValidasi";

// ============ DATA SISWA (10 per kelas) ============
const SISWA_DATA = {
  // ============ KELAS 7 ============
  "2601001": { nis: "2601001", nama: "Achmad Shodiq", kelas: "7", jenisKelamin: "L", tanggalLahir: "12 Mei 2013", waliMurid: "Bpk. Suryanto", avatarSeed: "achmad-shodiq" },
  "2601002": { nis: "2601002", nama: "Aisyah Nabila", kelas: "7", jenisKelamin: "P", tanggalLahir: "04 Agustus 2013", waliMurid: "Bpk. Hendra", avatarSeed: "aisyah-nabila" },
  "2601003": { nis: "2601003", nama: "Alamsyah Putra", kelas: "7", jenisKelamin: "L", tanggalLahir: "21 Maret 2013", waliMurid: "Bpk. Suparman", avatarSeed: "alamsyah-putra" },
  "2601004": { nis: "2601004", nama: "Anisa Rahmawati", kelas: "7", jenisKelamin: "P", tanggalLahir: "15 Juni 2013", waliMurid: "Bpk. Sutrisno", avatarSeed: "anisa-rahmawati" },
  "2601005": { nis: "2601005", nama: "Bagus Setiawan", kelas: "7", jenisKelamin: "L", tanggalLahir: "09 September 2013", waliMurid: "Bpk. Agus", avatarSeed: "bagus-setiawan" },
  "2601006": { nis: "2601006", nama: "Dewi Lestari", kelas: "7", jenisKelamin: "P", tanggalLahir: "23 Januari 2013", waliMurid: "Bpk. Wibowo", avatarSeed: "dewi-lestari" },
  "2601007": { nis: "2601007", nama: "Fajar Nugraha", kelas: "7", jenisKelamin: "L", tanggalLahir: "07 Juli 2013", waliMurid: "Bpk. Santoso", avatarSeed: "fajar-nugraha" },
  "2601008": { nis: "2601008", nama: "Hendra Wijaya", kelas: "7", jenisKelamin: "L", tanggalLahir: "18 Februari 2013", waliMurid: "Bpk. Setiawan", avatarSeed: "hendra-wijaya" },
  "2601009": { nis: "2601009", nama: "Indah Permatasari", kelas: "7", jenisKelamin: "P", tanggalLahir: "30 Oktober 2013", waliMurid: "Bpk. Rahmat", avatarSeed: "indah-permatasari" },
  "2601010": { nis: "2601010", nama: "Joko Purnomo", kelas: "7", jenisKelamin: "L", tanggalLahir: "11 April 2013", waliMurid: "Bpk. Sutarno", avatarSeed: "joko-purnomo" },

  // ============ KELAS 8 ============
  "2602001": { nis: "2602001", nama: "Abdul Rahman", kelas: "8", jenisKelamin: "L", tanggalLahir: "05 Mei 2012", waliMurid: "Bpk. Hermawan", avatarSeed: "abdul-rahman" },
  "2602002": { nis: "2602002", nama: "Bunga Lestari", kelas: "8", jenisKelamin: "P", tanggalLahir: "19 Juli 2012", waliMurid: "Bpk. Kurniawan", avatarSeed: "bunga-lestari" },
  "2602003": { nis: "2602003", nama: "Cinta Laura", kelas: "8", jenisKelamin: "P", tanggalLahir: "14 Maret 2012", waliMurid: "Bpk. Sutrisno", avatarSeed: "cinta-laura" },
  "2602004": { nis: "2602004", nama: "Dimas Anggara", kelas: "8", jenisKelamin: "L", tanggalLahir: "22 Agustus 2012", waliMurid: "Bpk. Widodo", avatarSeed: "dimas-anggara" },
  "2602005": { nis: "2602005", nama: "Erika Putri", kelas: "8", jenisKelamin: "P", tanggalLahir: "30 Juni 2012", waliMurid: "Bpk. Suharto", avatarSeed: "erika-putri" },
  "2602006": { nis: "2602006", nama: "Fajar Alfian", kelas: "8", jenisKelamin: "L", tanggalLahir: "17 September 2012", waliMurid: "Bpk. Sutopo", avatarSeed: "fajar-alfian" },
  "2602007": { nis: "2602007", nama: "Gina Sari", kelas: "8", jenisKelamin: "P", tanggalLahir: "08 Januari 2012", waliMurid: "Bpk. Sukardi", avatarSeed: "gina-sari" },
  "2602008": { nis: "2602008", nama: "Hendra Setiawan", kelas: "8", jenisKelamin: "L", tanggalLahir: "25 November 2012", waliMurid: "Bpk. Mustofa", avatarSeed: "hendra-setiawan" },
  "2602009": { nis: "2602009", nama: "Ika Nurlia", kelas: "8", jenisKelamin: "P", tanggalLahir: "13 Februari 2012", waliMurid: "Bpk. Sudirman", avatarSeed: "ika-nurlia" },
  "2602010": { nis: "2602010", nama: "Joko Widodo", kelas: "8", jenisKelamin: "L", tanggalLahir: "10 Oktober 2012", waliMurid: "Bpk. Sugiyanto", avatarSeed: "joko-widodo" },

  // ============ KELAS 9 ============
  "2603001": { nis: "2603001", nama: "Aang Kunaefi", kelas: "9", jenisKelamin: "L", tanggalLahir: "12 Maret 2011", waliMurid: "Bpk. Suparno", avatarSeed: "aang-kunaefi" },
  "2603002": { nis: "2603002", nama: "Bambang Pamungkas", kelas: "9", jenisKelamin: "L", tanggalLahir: "08 Juni 2011", waliMurid: "Bpk. Sunarto", avatarSeed: "bambang-pamungkas" },
  "2603003": { nis: "2603003", nama: "Cristian Gonzales", kelas: "9", jenisKelamin: "L", tanggalLahir: "30 Oktober 2011", waliMurid: "Bpk. Sujarwo", avatarSeed: "cristian-gonzales" },
  "2603004": { nis: "2603004", nama: "David Beckham", kelas: "9", jenisKelamin: "L", tanggalLahir: "02 Mei 2011", waliMurid: "Bpk. Soekarwo", avatarSeed: "david-beckham" },
  "2603005": { nis: "2603005", nama: "Egy Maulana", kelas: "9", jenisKelamin: "L", tanggalLahir: "07 Juli 2011", waliMurid: "Bpk. Hariyanto", avatarSeed: "egy-maulana" },
  "2603006": { nis: "2603006", nama: "Firman Utina", kelas: "9", jenisKelamin: "L", tanggalLahir: "15 Desember 2011", waliMurid: "Bpk. Susilo", avatarSeed: "firman-utina" },
  "2603007": { nis: "2603007", nama: "Gede Widiade", kelas: "9", jenisKelamin: "L", tanggalLahir: "21 Januari 2011", waliMurid: "Bpk. Suryono", avatarSeed: "gede-widiade" },
  "2603008": { nis: "2603008", nama: "Hendra Bayauw", kelas: "9", jenisKelamin: "L", tanggalLahir: "09 April 2011", waliMurid: "Bpk. Sugeng", avatarSeed: "hendra-bayauw" },
  "2603009": { nis: "2603009", nama: "Irfan Bachdim", kelas: "9", jenisKelamin: "L", tanggalLahir: "10 Agustus 2011", waliMurid: "Bpk. Joko", avatarSeed: "irfan-bachdim" },
  "2603010": { nis: "2603010", nama: "Jack Brown", kelas: "9", jenisKelamin: "L", tanggalLahir: "05 Mei 2011", waliMurid: "Bpk. Steven", avatarSeed: "jack-brown" },
};

const getSiswa = (nis) => {
  if (SISWA_DATA[nis]) return SISWA_DATA[nis];
  return {
    nis: nis || "2601001",
    nama: "Siswa Tidak Diketahui",
    kelas: "-",
    jenisKelamin: "-",
    tanggalLahir: "-",
    waliMurid: "-",
    avatarSeed: "unknown",
  };
};

const getWajahUrl = (seed, size = 300) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(seed)}&size=${size}&background=047857&color=fff&bold=true`;

// ============ DATA RADIUS ============
const RADIUS_GEOFENCE = 50; // meter
const JARAK_SISWA = 12; // meter (bisa dari API nanti)

// ============ ICON MAP ============
const icons = {
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  camera: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  pin: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function ValidasiWajah() {
  const { nis } = useParams();
  const siswa = getSiswa(nis);

  const [status, setStatus] = useState("pending");
  const [catatan, setCatatan] = useState("");
  const [preview, setPreview] = useState(null);

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [isApproving, setIsApproving] = useState(false);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  // Hitung persentase radius
  const persenRadius = Math.min((JARAK_SISWA / RADIUS_GEOFENCE) * 100, 100);
  const dalamRadius = JARAK_SISWA <= RADIUS_GEOFENCE;

  const handleApprove = () => setShowApproveModal(true);

  const handleConfirmApprove = () => {
    setIsApproving(true);
    setTimeout(() => {
      setIsApproving(false);
      setShowApproveModal(false);
      setStatus("approved");
    }, 800);
  };
  const handleReject = () => setShowRejectModal(true);

  const handleConfirmReject = (alasan) => {
    setIsRejecting(true);
    setTimeout(() => {
      setIsRejecting(false);
      setShowRejectModal(false);
      setCatatan(alasan);
      setStatus("rejected");
    }, 800);
  };
  const handleReset = () => {
    setStatus("pending");
    setCatatan("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const tanggalHariIni = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">

          {/* Header */}
          <div className="mt-3 mb-5 flex items-start gap-3">
            <Link
              to={`/detail-kelas/${siswa.kelas}`}
              className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 19-7-7 7-7M19 12H5" />
              </svg>
            </Link>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Validasi Foto Wajah
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Verifikasi wajah siswa untuk keperluan presensi biometrik AI
              </p>
            </div>
          </div>

          {/* Info Siswa */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                {icons.user}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900">{siswa.nama}</h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  NIS: <span className="font-mono text-gray-700">{siswa.nis}</span> •{" "}
                  Kelas <strong className="text-gray-700">{siswa.kelas}</strong> •{" "}
                  {siswa.jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
                </p>
              </div>
              <span
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
                  status === "approved"
                    ? "bg-emerald-50 text-emerald-700"
                    : status === "rejected"
                    ? "bg-red-50 text-red-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "approved"
                      ? "bg-emerald-500"
                      : status === "rejected"
                      ? "bg-red-500"
                      : "bg-amber-500 animate-pulse"
                  }`}
                ></span>
                {status === "approved"
                  ? "Terverifikasi"
                  : status === "rejected"
                  ? "Ditolak"
                  : "Menunggu Validasi"}
              </span>
            </div>
          </div>

          {/* === Foto Validasi Hari Ini === */}
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Foto Wajah Hari Ini</h3>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Foto yang diambil saat sesi presensi — {tanggalHariIni}
                </p>
              </div>
              <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                VALIDASI
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
              {/* Foto */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview foto validasi"
                      className="h-72 w-72 rounded-xl border-4 border-amber-100 object-cover"
                    />
                  ) : (
                    <img
                      src={getWajahUrl(siswa.avatarSeed || siswa.nama, 300)}
                      alt={`Foto validasi ${siswa.nama}`}
                      className="h-72 w-72 rounded-xl border-4 border-amber-100 object-cover"
                    />
                  )}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-amber-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
                    {icons.camera}
                    Sesi Hari Ini
                  </span>
                </div>
              </div>

              {/* Detail Foto + Upload */}
              <div className="flex flex-col justify-between gap-4">
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-4">
                  <h4 className="text-xs font-bold text-gray-900">Detail Foto</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Waktu Pengambilan</span>
                      <span className="font-semibold text-gray-800">06:42 WIB</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lokasi</span>
                      <span className="font-semibold text-gray-800">Kampus MTs Al-Ma'arif 02</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Radius Geofence</span>
                      <span className="font-semibold text-gray-800">{RADIUS_GEOFENCE} meter</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Jarak dari Pusat</span>
                      <span className={`font-semibold ${dalamRadius ? "text-emerald-700" : "text-red-600"}`}>
                        {JARAK_SISWA} meter
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kualitas Foto</span>
                      <span className="font-semibold text-emerald-700">Baik (HD)</span>
                    </div>
                  </div>

                  {/* Progress Bar Radius */}
                  <div className="mt-3 rounded-lg border border-gray-100 bg-white p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-700">
                        Radius Terpakai
                      </span>
                      <span className={`text-[10px] font-bold ${dalamRadius ? "text-emerald-700" : "text-red-600"}`}>
                        {JARAK_SISWA} / {RADIUS_GEOFENCE} m
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${dalamRadius ? "bg-emerald-500" : "bg-red-500"}`}
                        style={{ width: `${persenRadius}%` }}
                      ></div>
                    </div>
                    <p
                      className={`mt-1.5 flex items-center gap-1 text-[10px] font-semibold ${
                        dalamRadius ? "text-emerald-700" : "text-red-600"
                      }`}
                    >
                      {icons.pin}
                      {dalamRadius
                        ? "Dalam radius geofence (aman)"
                        : "Di luar radius geofence (perlu tindak lanjut)"}
                    </p>
                  </div>

                  <div className="mt-3 rounded-lg border border-dashed border-amber-200 bg-amber-50/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                          Status Pengambilan
                        </p>
                        <p className="mt-1 text-[10px] text-amber-700">
                          {dalamRadius
                            ? "Foto validasi berhasil diambil di lokasi aman."
                            : "Foto validasi diambil di luar radius geofence, perlu tindak lanjut."}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                          dalamRadius ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {dalamRadius ? "AMAN" : "PERHATIAN"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-[10px] text-gray-500">
              {status === "pending"
                ? "Pilih tindakan validasi di sebelah kanan."
                : status === "approved"
                ? "✓ Wajah telah divalidasi dan disetujui."
                : "✗ Validasi ditolak. Siswa akan diminta upload ulang."}
            </p>
            <div className="flex items-center gap-2">
              {status !== "pending" && (
                <button
                  onClick={handleReset}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
              )}
              <button
                onClick={handleReject}
                disabled={status !== "pending"}
                className="flex items-center gap-1.5 rounded-lg border border-red-300 bg-white px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {icons.close}
                Tolak Validasi
              </button>
              <button
                onClick={handleApprove}
                disabled={status !== "pending"}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {icons.check}
                Setujui Validasi
              </button>
            </div>
          </div>

          <ModalSetujuiValidasi
            isOpen={showApproveModal}
            onClose={() => setShowApproveModal(false)}
            onConfirm={handleConfirmApprove}
            siswa={siswa}
            isLoading={isApproving}
          />

          <ModalTolakValidasi
            isOpen={showRejectModal}
            onClose={() => setShowRejectModal(false)}
            onConfirm={handleConfirmReject}
            siswa={siswa}
            isLoading={isRejecting}
          />

          {/* Footer */}
          <footer className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-[10px] text-gray-400">
            <span>© 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu</span>
          </footer>
        </main>
      </div>
    </div>
  );
}