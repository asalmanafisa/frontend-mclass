import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";
import StatCard from "./dashboard/StatCard";
import ClassCard from "./dashboard/ClassCard";
import AnnouncementList from "./dashboard/AnnouncementList";
import CalendarWidget from "./dashboard/CalendarWidget";

const stats = [
  {
    label: "TOTAL SISWA",
    value: "30",
    unit: "Siswa",
    subtext: "100% Terdaftar",
    subColor: "text-emerald-600",
    variant: "default",
  },
  {
    label: "SUDAH HADIR",
    value: "27",
    unit: "90%",
    subtext: "+3 vs kemarin",
    subColor: "text-emerald-600",
    variant: "success",
  },
  {
    label: "TERLAMBAT / IZIN",
    value: "2",
    unit: "Siswa",
    subtext: "1 Izin, 1 Telat Sesi 1",
    subColor: "text-gray-500",
    variant: "warning",
  },
  {
    label: "BELUM HADIR / ALPA",
    value: "3",
    unit: "Siswa",
    subtext: "Perlu Tindak Lanjut: 3",
    subColor: "text-red-600",
    variant: "danger",
  },
];

const classes = [
  {
    kelasId: "7",
    className: "Kelas 7",
    totalStudents: 10,
    present: 10,
    absent: 0,
    percent: 100,
    note: null,
  },
  {
    kelasId: "8",
    className: "Kelas 8",
    totalStudents: 10,
    present: 9,
    absent: 1,
    percent: 90,
    note: null,
  },
  {
    kelasId: "9",
    className: "Kelas 9",
    totalStudents: 10,
    present: 8,
    absent: 2,
    percent: 80,
    note: "2 belum hadir",
  },
];

export default function Dashboard() {
  const [lastSync] = useState("07.30 WIB");

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Dashboard Pemantauan Presensi Harian
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Monitoring kehadiran siswa real-time MTs Al-Ma'arif O2 Singosari
              </p>
            </div>
            <div className="flex items-center gap-2">
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>

          {/* Monitoring Section */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <div>
               <h3 className="text-base font-bold text-gray-900">
        Monitoring per Tingkat Kelas
      </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Status kehadiran per tingkat kelas pada jam pemantauan berjalan saat ini
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {classes.map((c, i) => (
                <ClassCard key={i} {...c} />
              ))}
            </div>
          </div>

          {/* Bottom Grid: Announcement + Calendar */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
            <AnnouncementList />
            <CalendarWidget />
          </div>

          {/* Footer */}
          <footer className="mt-6 flex items-center justify-center border-t border-gray-200 pt-4 text-[10px] text-gray-400">
        <span>© 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu</span>
      </footer>
        </main>
      </div>
    </div>
  );
}