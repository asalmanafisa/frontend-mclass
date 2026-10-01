const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

// Contoh: Oktober 2026 mulai hari Kamis (index 3)
const calendarData = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, null,
];

const today = 23;

export default function CalendarWidget() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Kalender Presensi</h3>
        <div className="flex items-center gap-1">
          <button className="rounded p-1 text-gray-400 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <span className="text-xs font-semibold text-gray-700">
            Okt 2026
          </span>
          <button className="rounded p-1 text-gray-400 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <p className="mt-0.5 text-[10px] text-gray-500">
        Oktober 2026 • Semester Ganjil
      </p>

      {/* Day Headers */}
      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {days.map((d) => (
          <div key={d} className="py-1 text-[10px] font-bold text-gray-400">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="mt-1 grid grid-cols-7 gap-1">
        {calendarData.map((day, i) => {
          if (day === null) return <div key={i} className="aspect-square"></div>;

          const isToday = day === today;
          const isWeekend = i % 7 >= 5;

          return (
            <button
              key={i}
              className={`flex aspect-square items-center justify-center rounded-md text-xs font-medium transition ${
                isToday
                  ? "bg-emerald-600 text-white font-bold"
                  : isWeekend
                  ? "text-gray-300"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-600"></span>
          <span className="font-bold text-gray-800">Hari Ini (06.30 - 14.30 WIB)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="h-2.5 w-2.5 rounded-sm bg-amber-400"></span>
          <span>Agenda Penting: Upacara Hari Santri</span>
          <span className="ml-auto text-[10px] font-semibold text-amber-600">
            23 Okt 2026
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-300"></span>
          <span>Libur/Agenda Khusus: Hari Sumpah Pemuda</span>
          <span className="ml-auto text-[10px] text-gray-400">23 Okt 2026</span>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-xs font-bold text-gray-700 transition hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
        Lihat Jadwal Penuh & KBM Lengkap
      </button>
    </div>
  );
}