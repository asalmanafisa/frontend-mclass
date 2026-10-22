import { createContext, useContext, useState } from "react";
import { api, tokenStore } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => tokenStore.getUser());

  async function login(email, password, remember) {
    const data = await api("/api/auth/admin/login", {
      method: "POST",
      auth: false,
      body: { identity: email, password }, // backend membaca "identity"
    });
    tokenStore.save(data.token, data.user, remember);
    setUser(data.user);
    return data.user;
  }

  async function logout() {
    try {
      await api("/api/auth/logout", { method: "POST" });
    } catch {
      // sesi sudah habis di server → tetap bersihkan sisi klien
    }
    tokenStore.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);