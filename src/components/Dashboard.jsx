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
    value: "270",
    unit: "Siswa",
    subtext: "100% Terdaftar",
    subColor: "text-emerald-600",
    variant: "default",
  },
  {
    label: "SUDAH HADIR",
    value: "254",
    unit: "94.1%",
    subtext: "+12 vs kemarin",
    subColor: "text-emerald-600",
    variant: "success",
  },
  {
    label: "TERLAMBAT / IZIN",
    value: "12",
    unit: "Siswa",
    subtext: "8 Izin, 4 Telat Sesi 1",
    subColor: "text-gray-500",
    variant: "warning",
  },
  {
    label: "BELUM HADIR / ALPA",
    value: "4",
    unit: "Siswa",
    subtext: "Perlu Tindak Lanjut: 4 (Hubungi Wali Murid)",
    subColor: "text-red-600",
    variant: "danger",
  },
];

const classes = [
  {
    className: "7A",
    totalStudents: 30,
    present: 30,
    absent: 0,
    percent: 100,
    note: null,
  },
  {
    className: "7B",
    totalStudents: 30,
    present: 28,
    absent: 2,
    percent: 93.3,
    note: "2 belum hadir",
  },
  {
    className: "7C",
    totalStudents: 30,
    present: 30,
    absent: 0,
    percent: 100,
    note: null,
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
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Segarkan
              </button>
              <span className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Mode Terminal RFID
              </span>
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
                  Monitoring 9 Kelas Real-Time
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Status kehadiran per kelas pada jam pemantauan berjalan saat ini
                </p>
              </div>
              <Link
                 to="/all-classes"
                 className="text-xs font-semibold text-emerald-700 hover:underline"
                    >
                 Lihat Semua 9 Kelas →
                </Link>
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