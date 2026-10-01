import { Link } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";

// ============ DATA ============
const statsData = [
  {
    label: "Monitoring Kelas",
    value: "9",
    sub: "Kelas",
    desc: "Pemantauan Real-time",
    borderColor: "border-emerald-500",
    bgIcon: "bg-emerald-50 text-emerald-600",
    icon: "shield",
  },
  {
    label: "Kehadiran Rata-rata",
    value: "94,1%",
    sub: "",
    desc: "Naik +2,4% dari bulan lalu",
    borderColor: "border-blue-500",
    bgIcon: "bg-blue-50 text-blue-600",
    icon: "book",
  },
  {
    label: "Total Izin / Sakit",
    value: "12",
    sub: "Siswa",
    desc: "Perlu Verifikasi: 3 Akun",
    borderColor: "border-emerald-500",
    bgIcon: "bg-emerald-50 text-emerald-600",
    icon: "doc",
  },
  {
    label: "Alpa & Pelanggaran",
    value: "4",
    sub: "Siswa",
    desc: "Tindak Lanjut: 2 Siswa",
    borderColor: "border-red-500",
    bgIcon: "bg-red-50 text-red-500",
    icon: "warning",
  },
];

const classes = [
  { id: "7A", total: 30, present: 30, izin: 0, telat: 0, alpa: 0, percent: 100, status: "normal" },
  { id: "7B", total: 30, present: 28, izin: 1, telat: 0, alpa: 1, percent: 93.3, status: "warning" },
  { id: "7C", total: 30, present: 30, izin: 0, telat: 0, alpa: 0, percent: 100, status: "normal" },
  { id: "8A", total: 32, present: 30, izin: 1, telat: 0, alpa: 1, percent: 93.8, status: "warning" },
  { id: "8B", total: 30, present: 28, izin: 0, telat: 1, alpa: 1, percent: 93.3, status: "warning" },
  { id: "8C", total: 28, present: 26, izin: 1, telat: 0, alpa: 1, percent: 92.9, status: "warning" },
  { id: "9A", total: 32, present: 32, izin: 0, telat: 0, alpa: 0, percent: 100, status: "normal" },
  { id: "9B", total: 30, present: 28, izin: 1, telat: 1, alpa: 0, percent: 93.3, status: "warning" },
  { id: "9C", total: 28, present: 22, izin: 1, telat: 1, alpa: 4, percent: 78.6, status: "danger" },
];

const violations = [
  {
    name: "Muhammad Rizky Pratama",
    detail: "Terlambat 3x",
    kelas: "8B",
    date: "20 Nov 2026",
    status: "SP1",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    name: "Rizqi Fadli Ananda",
    detail: "Alpa 2x",
    kelas: "9C",
    date: "19 Nov 2026",
    status: "Tindak Lanjut",
    statusColor: "bg-amber-100 text-amber-700",
  },
];

// ============ ICON MAP ============
const statIcons = {
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  doc: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  ),
};

// ============ SUB COMPONENTS ============
function StatCard({ item }) {
  return (
    <div className={`rounded-xl border-l-4 border border-gray-200 bg-white p-4 ${item.borderColor}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold tracking-wide text-gray-600">
            {item.label}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-gray-900">
              {item.value}
            </span>
            {item.sub && (
              <span className="text-xs font-semibold text-gray-500">
                {item.sub}
              </span>
            )}
          </div>
          <p className={`mt-1 text-xs font-medium ${
            item.icon === "warning" ? "text-red-600" : "text-gray-500"
          }`}>
            {item.desc}
          </p>
        </div>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bgIcon}`}>
          {statIcons[item.icon]}
        </div>
      </div>
    </div>
  );
}

function ClassCompactCard({ c }) {
  const isWarning = c.percent < 95 && c.percent >= 85;
  const isDanger = c.percent < 85;

  return (
    <div
      className={`rounded-xl border bg-white p-3 ${
        isDanger
          ? "border-red-200"
          : isWarning
          ? "border-amber-200"
          : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">{c.id}</span>
        <span
          className={`h-2 w-2 rounded-full ${
            isDanger ? "bg-red-500" : isWarning ? "bg-amber-500" : "bg-emerald-500"
          }`}
        ></span>
      </div>
      <p className="mt-1 text-[10px] text-gray-500">Hadir: {c.present}/{c.total} Siswa</p>

      {/* Progress */}
      <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500">
        <span>{c.percent}% Hadir</span>
        <span>{c.alpa} Alpa</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${
            isDanger ? "bg-red-500" : isWarning ? "bg-amber-500" : "bg-emerald-500"
          }`}
          style={{ width: `${c.percent}%` }}
        ></div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2">
        <span className="text-[10px] text-gray-400">
          {c.percent}% Hadir
        </span>
        <button className="text-[10px] font-semibold text-emerald-700 hover:underline">
          Lihat Detail →
        </button>
      </div>
    </div>
  );
}

// ============ MAIN ============
export default function RekapKelas() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* ============ HEADER ============ */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Rekapitulasi Presensi & Monitoring Kelas
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Pantau kehadiran real-time, kelola izin & dispensasi, serta hasil rekapitulasi presensi.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Segarkan
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Periode: 1-30 Nov 2026
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Export Laporan
              </button>
            </div>
          </div>

          {/* ============ 4 STAT CARDS ============ */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statsData.map((s, i) => (
              <StatCard key={i} item={s} />
            ))}
          </div>

          {/* ============ DETAIL MONITORING 9 KELAS ============ */}
          <section className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Detail Monitoring 9 Kelas Real-Time
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Pantau kehadiran setiap kelas dalam satu tampilan. Data diperbarui otomatis setiap 30 detik.
                </p>
              </div>
              <Link
            to="/semua-kelas"
             className="text-xs font-semibold text-emerald-700 hover:underline"
            >
             Lihat Semua 9 Kelas →
            </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {classes.slice(0, 5).map((c) => (
                <ClassCompactCard key={c.id} c={c} />
              ))}
            </div>
          </section>

          {/* ============ 2-COLUMN: VIOLATIONS + GPS ============ */}
          <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* === Pelanggaran === */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Aktivitas Pelanggaran & Disiplin
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Daftar pelanggaran siswa yang tercatat oleh sistem.
                  </p>
                </div>
                <button className="rounded-lg border border-gray-200 px-2.5 py-1 text-[10px] font-semibold text-gray-600 hover:bg-gray-50">
                  Segarkan
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {violations.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                      {v.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-gray-900">
                        {v.name}
                      </p>
                      <p className="truncate text-[10px] text-gray-500">
                        {v.detail} • Kelas {v.kelas}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${v.statusColor}`}>
                        {v.status}
                      </span>
                      <p className="mt-0.5 text-[10px] text-gray-400">
                        {v.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 border-t border-gray-100 pt-3">
                <p className="text-[10px] text-gray-500">
                  Total: <strong className="text-gray-800">6 catatan pelanggaran</strong> •{" "}
                  <strong className="text-red-600">1</strong> menunggu tindak lanjut
                </p>
              </div>
            </div>

            {/* === Coverage GPS === */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Cakupan & Radius GPS Presensi
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Pemantauan titik lokasi presensi siswa & petugas.
                  </p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  GPS Aktif
                </span>
              </div>

              {/* Radar visual */}
              <div className="mt-5 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-200"></div>
                  <div className="absolute inset-6 rounded-full border-2 border-emerald-300"></div>
                  <div className="absolute inset-12 rounded-full border-2 border-emerald-500 bg-emerald-50"></div>
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="absolute -right-1 top-6 flex h-3 w-3 rounded-full bg-amber-400"></span>
                  <span className="absolute -left-2 bottom-10 flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center">
                  <p className="text-2xl font-extrabold text-gray-900">306</p>
                  <p className="text-[10px] text-gray-500">Siswa Terpantau</p>
                </div>
                <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-center">
                  <p className="text-2xl font-extrabold text-red-600">2</p>
                  <p className="text-[10px] text-red-600">Siswa Di Luar Radius</p>
                </div>
              </div>

              <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-[10px] font-semibold text-gray-700 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
                Lihat Detail Titik Lokasi
              </button>
            </div>
          </section>

          {/* ============ PANEL EKSPOR ============ */}
          <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900">
                Panel Ekspor Dokumen & Laporan Presensi
              </h3>
              <p className="mt-0.5 text-xs text-gray-500">
                Unduh rekap harian, mingguan, bulanan, atau per siswa dalam format PDF & Excel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {/* Export Bulanan */}
              <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-900">
                    Rekap Bulanan Format PDF
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Laporan lengkap dengan jumlah hadir, izin, sakit, alpa, dan grafik kehadiran.
                  </p>
                  <button className="mt-2 flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-emerald-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Unduh Laporan PDF
                  </button>
                </div>
              </div>

              {/* Export Excel */}
              <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-900">
                    Rekap Detail Excel (.xlsx)
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Data mentah presensi untuk analisis lanjutan atau integrasi sistem lain.
                  </p>
                  <button className="mt-2 flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-[10px] font-bold text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Unduh Rekap Excel
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ============ TABEL REKAP PER KELAS ============ */}
          <section className="mt-6 rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Ringkasan Presensi per Kelas Hari Ini
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Data diperbarui secara real-time. Terakhir diperbarui 07:30 WIB.
                </p>
              </div>
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-[10px] font-semibold text-gray-600 hover:bg-gray-50">
                Tabel Ringkasan
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    <th className="px-4 py-3 text-left">Kelas</th>
                    <th className="px-4 py-3 text-left">Wali Kelas</th>
                    <th className="px-4 py-3 text-center">Total</th>
                    <th className="px-4 py-3 text-center">Hadir</th>
                    <th className="px-4 py-3 text-center">Izin</th>
                    <th className="px-4 py-3 text-center">Telat</th>
                    <th className="px-4 py-3 text-center">Alpa</th>
                    <th className="px-4 py-3 text-center">% Hadir</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {[
                    { id: "7A", wali: "Ahmad Fauzi, S.Pd.", status: "Normal" },
                    { id: "7B", wali: "Siti Aminah, S.Pd.I.", status: "Perlu Cek" },
                    { id: "7C", wali: "Rizki Ramadhan, S.Pd.", status: "Normal" },
                    { id: "8A", wali: "Dewi Kartika, S.Pd.", status: "Perlu Cek" },
                    { id: "8B", wali: "Hasan Basri, M.Pd.", status: "Perlu Cek" },
                    { id: "8C", wali: "Nur Hidayah, S.Pd.", status: "Perlu Cek" },
                    { id: "9A", wali: "Ust. H. Fauzi", status: "Normal" },
                    { id: "9B", wali: "Aisyah Rahma, S.Pd.", status: "Perlu Cek" },
                    { id: "9C", wali: "Zainal Abidin, S.Ag.", status: "Tindak Lanjut" },
                  ].map((row, i) => {
                    const c = classes.find((cl) => cl.id === row.id);
                    const statusColor =
                      row.status === "Normal"
                        ? "bg-emerald-100 text-emerald-700"
                        : row.status === "Perlu Cek"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700";
                    return (
                      <tr key={i} className="hover:bg-gray-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">{c.id}</td>
                        <td className="px-4 py-3 text-gray-700">{row.wali}</td>
                        <td className="px-4 py-3 text-center text-gray-700">{c.total}</td>
                        <td className="px-4 py-3 text-center font-semibold text-emerald-700">{c.present}</td>
                        <td className="px-4 py-3 text-center text-gray-700">{c.izin}</td>
                        <td className="px-4 py-3 text-center text-gray-700">{c.telat}</td>
                        <td className={`px-4 py-3 text-center font-semibold ${c.alpa > 0 ? "text-red-600" : "text-gray-700"}`}>
                          {c.alpa}
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-gray-900">{c.percent}%</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${statusColor}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="text-[10px] font-semibold text-emerald-700 hover:underline">
                            Lihat Detail →
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-[10px] text-gray-400">
            <span>© 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-600">Bantuan Teknis</a>
              <a href="#" className="hover:text-gray-600">Kebijakan Privasi</a>
              <div className="flex items-center gap-1.5 text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="font-medium">Server Terhubung</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}