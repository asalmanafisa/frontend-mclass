import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPasswordForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // Step 1: email, Step 2: reset password
  const [email, setEmail] = useState("admin.presensi@mtsalmaarif.sch.id");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Handler kirim OTP
  const handleSendOtp = () => {
    if (!email) {
      alert("Email wajib diisi.");
      return;
    }
    setOtpSent(true);
    console.log("Kirim OTP ke:", email);
    // TODO: panggil API kirim OTP
  };

  // Handler lanjut ke step 2
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Kode OTP harus 6 digit.");
      return;
    }
    // TODO: verifikasi OTP ke API
    setStep(2);
  };

  // Handler update password
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      alert("Kata sandi minimal 8 karakter.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    console.log("Reset password:", { email, newPassword });
    // TODO: kirim ke API reset password
    alert("Kata sandi berhasil diperbarui!");
    navigate("/login");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Top green line */}
      <div className="h-1 w-full bg-emerald-600"></div>

      <div className="p-8">
        {/* Icon Shield */}
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-emerald-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
          Lupa Kata Sandi Admin
        </h2>

        <div className="mt-2 flex items-center justify-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-emerald-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-sm font-bold text-emerald-800">
            MTs Al-Ma'arif Singosari
          </span>
        </div>

        {/* ================= STEP 1 ================= */}
        <form onSubmit={handleVerifyOtp} className="mt-6 space-y-5">
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
            {/* Header Step 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                  1
                </span>
                <span className="text-sm font-bold text-gray-800">
                  Email Madrasah / Kemenag
                </span>
                <span className="text-red-500">*</span>
              </div>
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                Langkah {step} dari 3
              </span>
            </div>

            {/* Input Email + Tombol Kirim OTP */}
            <div className="mt-3 flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin.presensi@mtsalmaarif.sch.id"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <button
                type="button"
                onClick={handleSendOtp}
                className="flex items-center gap-1.5 rounded-lg border border-emerald-600 bg-white px-3 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                {otpSent ? "Kirim Ulang" : "Kirim OTP"}
              </button>
            </div>

            {/* Info OTP */}
            <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Kode OTP 6-digit telah dikirim ke alamat email di atas.
            </p>

            {/* Input OTP muncul setelah kirim */}
            {otpSent && (
              <div className="mt-3">
                <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                  Masukkan Kode OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="• • • • • •"
                  maxLength={6}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-center text-lg font-bold tracking-[0.5em] text-gray-800 placeholder-gray-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            )}
          </div>

          {/* ================= STEP 2 ================= */}
          <div
            className={`rounded-xl border border-gray-200 p-4 transition ${
              step === 2 ? "bg-gray-50/50" : "bg-gray-50/30 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    step === 2
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  2
                </span>
                <span className="text-sm font-bold text-gray-800">
                  Atur Kata Sandi Baru
                </span>
                <span className="text-red-500">*</span>
              </div>
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                Langkah 3 dari 3
              </span>
            </div>

            {/* New Password */}
            <div className="mt-3">
              <label className="mb-1.5 block text-xs font-medium text-gray-700">
                Kata Sandi Baru
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showNewPass ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={step !== 2}
                  placeholder="Minimal 8 karakter (huruf & angka)"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPass((s) => !s)}
                  disabled={step !== 2}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:cursor-not-allowed"
                >
                  {showNewPass ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mt-3">
              <label className="mb-1.5 block text-xs font-medium text-gray-700">
                Konfirmasi Kata Sandi Baru
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showConfirmPass ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={step !== 2}
                  placeholder="Ulangi kata sandi baru"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass((s) => !s)}
                  disabled={step !== 2}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:cursor-not-allowed"
                >
                  {showConfirmPass ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tombol Submit */}
          {step === 1 ? (
            <button
              type="submit"
              disabled={!otpSent}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Verifikasi OTP & Lanjutkan
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleResetPassword}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Perbarui Kata Sandi
            </button>
          )}

          {/* Link Kembali */}
          <p className="text-center text-sm text-gray-600">
            <Link
              to="/login"
              className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline"
            >
              ← Kembali ke Halaman Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}