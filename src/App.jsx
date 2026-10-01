import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Dashboard from "./components/Dashboard"; 
import SemuaKelas from "./components/SemuaKelas";
import RekapKelas from "./components/RekapKelas";
import KalenderAgenda from "./components/KalenderAgenda";
import Pengaturan from "./components/Pengaturan";

function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 items-start justify-center px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout><LoginForm /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginForm /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegistrationForm /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPasswordForm /></AuthLayout>} />

        {/* Dashboard Route (full-screen tanpa Header/Footer publik) */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rekap-kelas" element={<RekapKelas />} />
        <Route path="/semua-kelas" element={<SemuaKelas />} /> {/* path tetap /all-classes biar link lama tetap jalan */}
        <Route path="/kalender" element={<KalenderAgenda />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
      </Routes>
    </BrowserRouter>
  );
}