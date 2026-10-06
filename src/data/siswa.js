export const SISWA_DATA = {
  // ============ KELAS 7 ============
  "2601001": { nis: "2601001", nama: "Achmad Shodiq", kelas: "7", jenisKelamin: "L" },
  "2601002": { nis: "2601002", nama: "Aisyah Nabila", kelas: "7", jenisKelamin: "P" },
  "2601003": { nis: "2601003", nama: "Alamsyah Putra", kelas: "7", jenisKelamin: "L" },
  "2601004": { nis: "2601004", nama: "Anisa Rahmawati", kelas: "7", jenisKelamin: "P" },
  "2601005": { nis: "2601005", nama: "Bagus Setiawan", kelas: "7", jenisKelamin: "L" },
  "2601006": { nis: "2601006", nama: "Dewi Lestari", kelas: "7", jenisKelamin: "P" },
  "2601007": { nis: "2601007", nama: "Fajar Nugraha", kelas: "7", jenisKelamin: "L" },
  "2601008": { nis: "2601008", nama: "Hendra Wijaya", kelas: "7", jenisKelamin: "L" },
  "2601009": { nis: "2601009", nama: "Indah Permatasari", kelas: "7", jenisKelamin: "P" },
  "2601010": { nis: "2601010", nama: "Joko Purnomo", kelas: "7", jenisKelamin: "L" },

  // ============ KELAS 8 ============
  "2602001": { nis: "2602001", nama: "Abdul Rahman", kelas: "8", jenisKelamin: "L" },
  "2602002": { nis: "2602002", nama: "Bunga Lestari", kelas: "8", jenisKelamin: "P" },
  "2602003": { nis: "2602003", nama: "Cinta Laura", kelas: "8", jenisKelamin: "P" },
  "2602004": { nis: "2602004", nama: "Dimas Anggara", kelas: "8", jenisKelamin: "L" },
  "2602005": { nis: "2602005", nama: "Erika Putri", kelas: "8", jenisKelamin: "P" },
  "2602006": { nis: "2602006", nama: "Fajar Alfian", kelas: "8", jenisKelamin: "L" },
  "2602007": { nis: "2602007", nama: "Gina Sari", kelas: "8", jenisKelamin: "P" },
  "2602008": { nis: "2602008", nama: "Hendra Setiawan", kelas: "8", jenisKelamin: "L" },
  "2602009": { nis: "2602009", nama: "Ika Nurlia", kelas: "8", jenisKelamin: "P" },
  "2602010": { nis: "2602010", nama: "Joko Widodo", kelas: "8", jenisKelamin: "L" },

  // ============ KELAS 9 ============
  "2603001": { nis: "2603001", nama: "Aang Kunaefi", kelas: "9", jenisKelamin: "L" },
  "2603002": { nis: "2603002", nama: "Bambang Pamungkas", kelas: "9", jenisKelamin: "L" },
  "2603003": { nis: "2603003", nama: "Cristian Gonzales", kelas: "9", jenisKelamin: "L" },
  "2603004": { nis: "2603004", nama: "David Beckham", kelas: "9", jenisKelamin: "L" },
  "2603005": { nis: "2603005", nama: "Egy Maulana", kelas: "9", jenisKelamin: "L" },
  "2603006": { nis: "2603006", nama: "Firman Utina", kelas: "9", jenisKelamin: "L" },
  "2603007": { nis: "2603007", nama: "Gede Widiade", kelas: "9", jenisKelamin: "L" },
  "2603008": { nis: "2603008", nama: "Hendra Bayauw", kelas: "9", jenisKelamin: "L" },
  "2603009": { nis: "2603009", nama: "Irfan Bachdim", kelas: "9", jenisKelamin: "L" },
  "2603010": { nis: "2603010", nama: "Jack Brown", kelas: "9", jenisKelamin: "L" },
};

// Helper: ambil siswa by kelas ("7" | "8" | "9")
export const getSiswaByKelas = (kelas) =>
  Object.values(SISWA_DATA).filter((s) => s.kelas === kelas);