import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, footerContent }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50">
      <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          {children}
        </div>
        <footer className="flex w-full shrink-0 items-center justify-center border-t border-gray-200 bg-white px-4 py-3 text-center text-[10px] text-gray-400">
          {footerContent ?? (
            <span>
              © 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu
            </span>
          )}
        </footer>
      </div>
    </div>
  );
}
