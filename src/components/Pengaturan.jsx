import { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";
import ModalGantiFoto from "./ModalGantiFoto";
import ModalHapusFoto from "./ModalHapusFoto";

// ============ DATA ============
const aktivitasLog = [
  {
    device: "Chrome pada macOS",
    detail: "Sesi terakhir perangkat macOS",
    location: "Malang, Jawa Timur",
    time: "Sekarang",
    active: true,
    icon: "chrome",
  },
  {
    device: "Aplikasi Android Premium",
    detail: "Google Play Store, Android 14",
    location: "Ponorogo, Jawa Timur",
    time: "13 Oct 2025 14:22",
    active: false,
    icon: "android",
  },
];

// ============ ICON MAP ============
const icons = {
  chrome: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  ),
  android: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
  person: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  key: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  ),
  bell: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
};

// ============ SUB COMPONENTS ============
function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition ${
        checked ? "bg-emerald-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition ${
          checked ? "translate-x-4.5" : "translate-x-0.5"
        }`}
      ></span>
    </button>
  );
}

// ============ MAIN ============
export default function Pengaturan() {
  const [profile, setProfile] = useState({
    nama: "Ust. H. Ahmad Fauzi, S.Pd",
    email: "ahmad.fauzi@mtsalmaarif.sch.id",
    role: "Guru / Petugas Presensi Harian",
  });

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState({
    current: false,
    newPass: false,
    confirm: false,
  });

  const [preferences, setPreferences] = useState({
    notifWhatsapp: true,
    notifGeolokasi: true,
    notifVideo: false,
  });

  const [isSaving, setIsSaving] = useState(false);

  const [showFotoModal, setShowFotoModal] = useState(false);

  const [showHapusModal, setShowHapusModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Perubahan berhasil disimpan!");
    }, 800);
  };

const handleHapusFoto = () => {
  setIsDeleting(true);
  setTimeout(() => {
    setIsDeleting(false);
    setShowHapusModal(false);
    alert("Foto profil berhasil dihapus. Avatar default telah diterapkan.");
  }, 800);
};

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* ============ BANNER HIJAU ============ */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 p-6 text-white">
            {/* Decoration */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-12 -left-6 h-40 w-40 rounded-full bg-white/5"></div>

            <div className="relative flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
                  {icons.shield}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-emerald-100">
                    PUSAT KENDALI PROFIL MADRASAH
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold">
                    Pengaturan Akun Admin
                  </h2>
                  <p className="mt-1 text-xs text-emerald-50">
                    Kelola rekening profil identitas pengguna, hak akses kredensial madrasah, dan sistem notifikasi saat ini.
                  </p>
                </div>
              </div>
              <div className="hidden items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-[10px] font-semibold">
                  Terverifikasi Kemenag
                </span>
              </div>
            </div>
          </div>

          {/* ============ SECTION TITLE ============ */}
          <div className="mt-6 mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              {icons.person}
            </span>
            <h3 className="text-base font-bold text-gray-900">
              Informasi Profil Akun
            </h3>
          </div>

          {/* ============ 2-COLUMN LAYOUT ============ */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[320px_1fr]">
            {/* ==================== LEFT COLUMN ==================== */}
            <div className="space-y-4">
              {/* ==== KARTU PROFIL ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                {/* Avatar */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-700 text-3xl font-extrabold text-white">
                  HF
                </div>

                <h4 className="mt-3 text-sm font-bold text-gray-900">
                  {profile.nama}
                </h4>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Guru / Petugas Admin Presensi
                </p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <button
        onClick={() => setShowFotoModal(true)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-gray-700 hover:bg-gray-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
        Ganti Foto
      </button>
                  <span className="text-[9px] text-gray-400">atau</span>
                 <button
        onClick={() => setShowHapusModal(true)}
        className="text-[10px] font-semibold text-red-500 hover:underline"
      >
     Hapus
      </button>
                </div>
                <p className="mt-2 text-[9px] text-gray-400">
                  Format JPG, PNG maksimal 5MB. Disarankan 500x500.
                </p>
              </div>

              {/* ==== LOG SESI TERAKHIR ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">
                    Log Sesi Terakhir
                  </h4>
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-600">
                    Keamanan
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {aktivitasLog.map((log, i) => (
                    <div
                      key={i}
                      className={`relative rounded-lg border p-3 ${
                        log.active
                          ? "border-emerald-200 bg-emerald-50/40"
                          : "border-gray-100 bg-gray-50/50"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          log.active
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {icons[log.icon]}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-gray-900">
                            {log.device}
                          </p>
                          <p className="text-[10px] text-gray-500">{log.detail}</p>
                          <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {log.location}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2">
                        <span className="flex items-center gap-1 text-[10px] text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {log.time}
                        </span>
                        {log.active && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                            Sesi Aktif Saat Ini
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================== RIGHT COLUMN ==================== */}
            <div className="space-y-4">
              {/* ==== DATA DIRI ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-gray-900">
                      Data Diri
                    </h3>
                    <span className="text-red-500">*</span>
                  </div>
                </div>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Informasi identitas petugas pendidik dan tenaga kependidikan madrasah.
                </p>

                <div className="mt-4 space-y-4">
                  {/* Nama */}
                  <div>
                    <label className="mb-1 block text-[10px] font-bold tracking-wide text-gray-600">
                      NAMA LENGKAP & GELAR <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={profile.nama}
                      onChange={(e) => setProfile({ ...profile, nama: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-xs text-gray-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1 block text-[10px] font-bold tracking-wide text-gray-600">
                      ALAMAT EMAIL RESMI MADRASAH <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-9 pr-3 text-xs text-gray-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                      Digunakan untuk notifikasi resmi & verifikasi akun petugas.
                    </p>
                  </div>

                  {/* Peran */}
                  <div>
                    <label className="mb-1 block text-[10px] font-bold tracking-wide text-gray-600">
                      PERAN SISTEM (ROLE) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-2">
                      <span className="text-xs text-gray-800">{profile.role}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                      Peran hanya dapat diubah oleh Super Admin Madrasah.
                    </p>
                  </div>
                </div>
              </div>

              {/* ==== KREDENSIAL AKSES LOGIN ==== */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-700">{icons.key}</span>
                  <h3 className="text-base font-bold text-gray-900">
                    Kredensial Akses Login
                  </h3>
                </div>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Pengaturan kata sandi dan akun portal admin.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Kata Sandi Saat Ini */}
                  <div>
                    <label className="mb-1 block text-[10px] font-bold tracking-wide text-gray-600">
                      KATA SANDI SAAT INI
                    </label>
                    <div className="relative">
                      <input
                        type={showPass.current ? "text" : "password"}
                        value={password.current}
                        onChange={(e) => setPassword({ ...password, current: e.target.value })}
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 pr-9 text-xs text-gray-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass({ ...showPass, current: !showPass.current })}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Kata Sandi Baru */}
                  <div>
                    <label className="mb-1 block text-[10px] font-bold tracking-wide text-gray-600">
                      KATA SANDI BARU (OPSIONAL)
                    </label>
                    <div className="relative">
                      <input
                        type={showPass.newPass ? "text" : "password"}
                        value={password.newPass}
                        onChange={(e) => setPassword({ ...password, newPass: e.target.value })}
                        placeholder="Kosongkan jika tidak diganti"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 pr-9 text-xs text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass({ ...showPass, newPass: !showPass.newPass })}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* ==== ACTION BAR ==== */}
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-[10px] text-gray-500">
                  Setiap perubahan data dicatat ke dalam audit log keamanan madrasah.
                </p>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                    Batal
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-800 disabled:opacity-70"
                  >
                    {isSaving ? (
                      <>
                        <svg className="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Menyimpan...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                          <polyline points="17 21 17 13 7 13 7 21" />
                          <polyline points="7 3 7 8 15 8" />
                        </svg>
                        Simpan perubahan
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

{/* ⬇️ MODAL TARUH DI SINI ⬇️ */}
  <ModalGantiFoto
    isOpen={showFotoModal}
    onClose={() => setShowFotoModal(false)}
    user={profile}
  />

  {/* MODAL HAPUS FOTO */}
<ModalHapusFoto
  isOpen={showHapusModal}
  onClose={() => setShowHapusModal(false)}
  onConfirm={handleHapusFoto}
  user={{
    nama: profile.nama,
    idPetugas: "AGM-089",
    unit: "MTs Al-Ma'arif",
    avatarSeed: "AF",
  }}
  isDeleting={isDeleting}
/>

          {/* Footer */}
          <footer className="mt-6 flex items-center justify-center border-t border-gray-200 pt-4 text-[10px] text-gray-400">
        <span>© 2026 MTs Al-Ma'arif O2 Singosari • Sistem Presensi Digital Terpadu</span>
      </footer>
        </main>
      </div>
    </div>
  );
}