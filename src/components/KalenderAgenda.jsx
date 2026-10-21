import { useState } from "react";
import { Link } from "react-router-dom"; // Tambahkan import Link jika belum ada
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";

// ============ DATA STATISTIK ============
const statsData = [
  {
    label: "TOTAL",
    sublabel: "AGENDA",
    value: "6",
    desc: "Bulan ini",
    borderColor: "border-emerald-500",
    bgIcon: "bg-emerald-50 text-emerald-600",
    icon: "calendar",
  },
  {
    label: "AGENDA",
    sublabel: "PENTING",
    value: "2",
    desc: "2 dalam minggu ini",
    borderColor: "border-amber-500",
    bgIcon: "bg-amber-50 text-amber-600",
    icon: "star",
  },
  {
    label: "LIBUR",
    sublabel: "NASIONAL",
    value: "1",
    desc: "Bulan ini",
    borderColor: "border-red-500",
    bgIcon: "bg-red-50 text-red-500",
    icon: "flag",
  },
  {
    label: "SEDANG",
    sublabel: "BERLANGSUNG",
    value: "1",
    desc: "Kegiatan aktif",
    borderColor: "border-blue-500",
    bgIcon: "bg-blue-50 text-blue-600",
    icon: "activity",
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
    <div className={`rounded-xl border-l-4 border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${item.borderColor}`}>
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
  const [currentMonth] = useState("Oktober 2026");
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

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* ============ HEADER - Animasi Masuk ============ */}
          <div className="animate-item delay-100 mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Kalender & Manajemen Pengumuman Madrasah
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Kelola agenda kegiatan madrasah dan pengumuman yang tersinkronisasi ke seluruh pengguna.
              </p>
            </div>

            <Link
              to="/buat-pengumuman"
              className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
              Buat Pengumuman
            </Link>
          </div>

          {/* ============ 4 STAT CARDS - Animasi Masuk ============ */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {statsData.map((s, i) => (
              <div key={i} className="animate-item delay-200">
                <StatCard item={s} />
              </div>
            ))}
          </div>

          {/* ============ KALENDER FULL-WIDTH - Animasi Masuk ============ */}
          <div className="animate-item delay-300 mt-6 flex flex-col rounded-xl border border-gray-200 bg-white p-5">
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
            <div className="flex flex-1 flex-col justify-center">
              <div className="grid grid-cols-7 gap-1">
                {calendarGrid.map((day, i) => {
                  if (day === null) return <div key={i} className="min-h-[52px]"></div>;

                  const isToday = day === today;
                  const event = eventDays[day];
                  const isWeekend = i % 7 >= 5;

                  return (
                    <button
                      key={i}
                      className={`relative min-h-[52px] rounded-lg border p-1.5 text-left transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 ${
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

          {/* Footer - Animasi Masuk */}
          <footer className="animate-item delay-400 mt-6 flex items-center justify-center border-t border-gray-200 pt-4 text-[10px] text-gray-400">
            <span>© 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu</span>
          </footer>
        </main>
      </div>
    </div>
  );
}