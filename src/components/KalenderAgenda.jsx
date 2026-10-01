import { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";

// ============ DATA STATISTIK ============
const statsData = [
  {
    label: "TOTAL",
    sublabel: "AGENDA",
    value: "18",
    desc: "Bulan ini",
    borderColor: "border-emerald-500",
    bgIcon: "bg-emerald-50 text-emerald-600",
    icon: "calendar",
  },
  {
    label: "AGENDA",
    sublabel: "PENTING",
    value: "5",
    desc: "3 dalam minggu ini",
    borderColor: "border-amber-500",
    bgIcon: "bg-amber-50 text-amber-600",
    icon: "star",
  },
  {
    label: "LIBUR",
    sublabel: "NASIONAL",
    value: "4",
    desc: "Bulan ini",
    borderColor: "border-red-500",
    bgIcon: "bg-red-50 text-red-500",
    icon: "flag",
  },
  {
    label: "SEDANG",
    sublabel: "BERLANGSUNG",
    value: "2",
    desc: "Kegiatan aktif",
    borderColor: "border-blue-500",
    bgIcon: "bg-blue-50 text-blue-600",
    icon: "activity",
  },
];

// ============ DATA AGENDA MENDATANG ============
const agendaMendatang = [
  {
    date: "04",
    month: "NOV",
    tag: "Penting",
    tagColor: "bg-amber-100 text-amber-700",
    title: "Upacara Peringatan Hari Guru & Bulan Bahasa",
    time: "07:00 - 09:30 WIB",
    place: "Lapangan Utama MTs Al-Ma'arif",
    note: "Seluruh siswa wajib hadir dengan pakaian seragam lengkap & atribut. Petugas upacara dari kelas 8A.",
  },
  {
    date: "07",
    month: "NOV",
    tag: "Kegiatan",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Penilaian Tengah Semester (PTS) Ganjil",
    time: "07:00 - 12:00 WIB",
    place: "Seluruh Ruang Kelas",
    note: "Pelaksanaan PTS selama 1 minggu (7-12 November 2026). Jadwal & ruang ujian dapat dilihat di papan pengumuman.",
  },
  {
    date: "12",
    month: "NOV",
    tag: "Libur",
    tagColor: "bg-red-100 text-red-700",
    title: "Peringatan Hari Kesehatan Nasional",
    time: "Sepanjang Hari",
    place: "-",
    note: "KBM diliburkan. Siswa diharapkan tetap mengikuti kegiatan ibadah di rumah.",
  },
];

// ============ DATA FORM BUAT PENGUMUMAN ============
const jenisPengumuman = [
  { label: "Akademik", value: "akademik" },
  { label: "Kegiatan", value: "kegiatan" },
  { label: "Libur / Cuti", value: "libur" },
  { label: "Penting", value: "penting" },
  { label: "Prestasi", value: "prestasi" },
];

const targetAudiens = [
  { label: "Semua", value: "semua" },
  { label: "Siswa", value: "siswa" },
  { label: "Guru", value: "guru" },
  { label: "Wali Murid", value: "wali" },
];

// ============ DATA PENGUMUMAN TERKINI ============
const pengumumanTerkini = [
  {
    title: "Perubahan Jadwal Ujian PTS Ganjil 2026",
    detail: "Semua mata pelajaran. Jadwal ujian dimajukan 1 hari dari jadwal sebelumnya.",
    date: "Hari ini",
    priority: "Penting",
    priorityColor: "bg-amber-100 text-amber-700",
    timeAgo: "2 jam yang lalu",
  },
  {
    title: "Pendaftaran Ekstrakurikuler Pramuka",
    detail: "Dibuka untuk siswa kelas 7 dan 8. Pendaftaran ditutup 10 November 2026.",
    date: "Kemarin",
    priority: "Kegiatan",
    priorityColor: "bg-emerald-100 text-emerald-700",
    timeAgo: "1 hari yang lalu",
  },
  {
    title: "Jadwal Libur dan Cuti Bersama Akhir Tahun",
    detail: "Berikut jadwal libur semester ganjil tahun ajaran 2026/2027.",
    date: "2 hari lalu",
    priority: "Libur",
    priorityColor: "bg-red-100 text-red-700",
    timeAgo: "2 hari yang lalu",
  },
];

// ============ ICON MAP ============
const statIcons = {
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  flag: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
    </svg>
  ),
  activity: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

// ============ SUB COMPONENTS ============
function StatCard({ item }) {
  return (
    <div className={`rounded-xl border-l-4 border border-gray-200 bg-white p-4 ${item.borderColor}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className={`flex h-4 w-4 items-center justify-center rounded ${item.bgIcon}`}>
              <span className="scale-[0.6]">{statIcons[item.icon]}</span>
            </span>
            <p className="text-[10px] font-bold tracking-wide text-gray-600">
              {item.label}
            </p>
          </div>
          <p className="mt-1 text-[10px] font-bold tracking-wide text-gray-500">
            {item.sublabel}
          </p>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-gray-900">
              {item.value}
            </span>
          </div>
          <p className="mt-1 text-[10px] text-gray-500">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

// ============ MAIN ============
export default function KalenderAgenda() {
  const [currentMonth, setCurrentMonth] = useState("Oktober 2026");
  const [viewMode, setViewMode] = useState("Bulanan");

  // Data kalender Oktober 2026 (mulai hari Kamis)
  const daysHeader = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const calendarGrid = [
    null, null, null, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, null,
  ];

  const today = 23;
  const eventDays = {
    5: { type: "emerald", label: "Upacara" },
    12: { type: "amber", label: "PTS" },
    17: { type: "emerald", label: "Kegiatan" },
    23: { type: "emerald", label: "Hari Ini" },
    28: { type: "red", label: "Libur" },
    30: { type: "amber", label: "Rapat" },
  };

  // Form state
  const [formData, setFormData] = useState({
    jenis: "penting",
    judul: "",
    tanggal: "2026-10-23",
    target: "semua",
    prioritas: "penting",
    deskripsi: "",
  });

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* ============ HEADER ============ */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-gray-900">
                  Kalender & Manajemen Pengumuman Madrasah
                </h2>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  Baru
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Kelola agenda kegiatan madrasah dan pengumuman yang tersinkronisasi ke seluruh pengguna.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Segarkan
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5v14" />
                </svg>
                Buat Agenda/Pengumuman Baru
              </button>
            </div>
          </div>

          {/* ============ 4 STAT CARDS ============ */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {statsData.map((s, i) => (
              <StatCard key={i} item={s} />
            ))}
          </div>

          {/* ============ 2-COLUMN LAYOUT ============ */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
            {/* ==================== LEFT: KALENDER ==================== */}
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                {/* Header Kalender */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-gray-900">
                      {currentMonth}
                    </h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {viewMode}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setViewMode("Harian")}
                      className={`rounded-md px-2.5 py-1 text-[10px] font-semibold transition ${
                        viewMode === "Harian"
                          ? "bg-emerald-700 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Harian
                    </button>
                    <button
                      onClick={() => setViewMode("Mingguan")}
                      className={`rounded-md px-2.5 py-1 text-[10px] font-semibold transition ${
                        viewMode === "Mingguan"
                          ? "bg-emerald-700 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Mingguan
                    </button>
                    <button
                      onClick={() => setViewMode("Bulanan")}
                      className={`rounded-md px-2.5 py-1 text-[10px] font-semibold transition ${
                        viewMode === "Bulanan"
                          ? "bg-emerald-700 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Bulanan
                    </button>
                  </div>
                </div>

                {/* Day Headers */}
                <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                  {daysHeader.map((d) => (
                    <div key={d} className="py-2 text-[10px] font-bold text-gray-400">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarGrid.map((day, i) => {
                    if (day === null) return <div key={i} className="min-h-[52px]"></div>;

                    const isToday = day === today;
                    const event = eventDays[day];
                    const isWeekend = i % 7 >= 5;

                    return (
                      <button
                        key={i}
                        className={`relative min-h-[52px] rounded-lg border p-1.5 text-left transition hover:shadow-sm ${
                          isToday
                            ? "border-emerald-600 bg-emerald-50"
                            : event
                            ? "border-gray-200 bg-white hover:bg-gray-50"
                            : "border-transparent hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${
                            isToday
                              ? "bg-emerald-700 text-white"
                              : isWeekend
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          {day}
                        </span>
                        {event && !isToday && (
                          <div className="mt-1">
                            <span
                              className={`inline-block h-1.5 w-full rounded-full ${
                                event.type === "emerald"
                                  ? "bg-emerald-500"
                                  : event.type === "amber"
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                            ></span>
                            <p className="mt-0.5 truncate text-[8px] font-semibold text-gray-600">
                              {event.label}
                            </p>
                          </div>
                        )}
                        {isToday && (
                          <p className="mt-1 text-[8px] font-bold text-emerald-700">
                            HARI INI
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    Hari Ini / Agenda Aktif
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                    Agenda Penting
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    Libur Nasional / Cuti
                  </div>
                </div>
              </div>

              {/* ==== AGENDA MENDATANG ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Agenda Mendatang
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Berikut ini adalah agenda mendatang untuk madrasah Anda.
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-600">
                    {agendaMendatang.length} Agenda
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {agendaMendatang.map((a, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
                    >
                      {/* Date Badge */}
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-emerald-200 bg-white">
                        <span className="text-lg font-extrabold text-emerald-700">
                          {a.date}
                        </span>
                        <span className="text-[9px] font-bold text-gray-500">
                          {a.month}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold leading-tight text-gray-900">
                            {a.title}
                          </h4>
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${a.tagColor}`}>
                            {a.tag}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[10px] text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </svg>
                            {a.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {a.place}
                          </span>
                        </div>
                        <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-gray-500">
                          {a.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================== RIGHT: FORM + PENGUMUMAN ==================== */}
            <div className="space-y-4">
              {/* ==== FORM BUAT PENGUMUMAN ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Form Buat & Edit Pengumuman
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Tulis pengumuman baru untuk dipublikasikan.
                    </p>
                  </div>
                  <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    Draft
                  </span>
                </div>

                <form className="mt-4 space-y-3">
                  {/* Jenis Pengumuman */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Jenis Pengumuman <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.jenis}
                      onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      {jenisPengumuman.map((j) => (
                        <option key={j.value} value={j.value}>
                          {j.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Judul */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Judul Pengumuman <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.judul}
                      onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                      placeholder="Contoh: Perubahan Jadwal Ujian PTS Ganjil"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Tanggal */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Tanggal Publikasi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.tanggal}
                      onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Target Audiens */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Target Audiens <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.target}
                      onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      {targetAudiens.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Prioritas */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Prioritas <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["Rendah", "Normal", "Penting", "Urgent"].map((p) => {
                        const val = p.toLowerCase();
                        const active = formData.prioritas === val;
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setFormData({ ...formData, prioritas: val })}
                            className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold transition ${
                              active
                                ? "border-emerald-600 bg-emerald-700 text-white"
                                : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deskripsi */}
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-gray-700">
                      Deskripsi Pengumuman <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.deskripsi}
                      onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                      placeholder="Tuliskan isi pengumuman secara lengkap dan jelas..."
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-700 py-2 text-xs font-bold text-white hover:bg-emerald-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      Terbitkan Pengumuman
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Simpan Draft
                    </button>
                  </div>
                </form>
              </div>

              {/* ==== DAFTAR PENGUMUMAN TERKINI ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Daftar Pengumuman Terkini
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Pengumuman yang baru saja diterbitkan.
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-600">
                    12 Publikasi
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {pengumumanTerkini.map((p, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-gray-100 bg-gray-50/50 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold leading-snug text-gray-900">
                          {p.title}
                        </h4>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${p.priorityColor}`}>
                          {p.priority}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-[11px] text-gray-500">
                        {p.detail}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {p.date}
                        </span>
                        <span>{p.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-[10px] font-semibold text-gray-600 hover:bg-gray-50">
                  Lihat Semua Pengumuman →
                </button>
              </div>
            </div>
          </div>

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