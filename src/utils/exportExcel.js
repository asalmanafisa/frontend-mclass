import * as XLSX from "xlsx";

/**
 * Export data ke file Excel (.xlsx)
 * @param {Array} data - Array of objects, misal [{kelas: "7", hadir: 88, ...}]
 * @param {String} fileName - Nama file tanpa ekstensi (misal "Rekap-Presensi")
 * @param {String} sheetName - Nama sheet di dalam Excel (default "Sheet1")
 */
export function exportToExcel(data, fileName = "export", sheetName = "Data") {
  if (!data || data.length === 0) {
    alert("Tidak ada data untuk di-export.");
    return;
  }

  // Buat worksheet dari data JSON
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Auto-width kolom
  const colWidths = Object.keys(data[0]).map((key) => {
    const maxLength = Math.max(
      key.length,
      ...data.map((row) => String(row[key] ?? "").length)
    );
    return { wch: maxLength + 2 };
  });
  worksheet["!cols"] = colWidths;

  // Buat workbook baru
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Generate nama file dengan tanggal
  const date = new Date().toISOString().slice(0, 10);
  const fullFileName = `${fileName}-${date}.xlsx`;

  // Trigger download
  XLSX.writeFile(workbook, fullFileName);
}

/**
 * Export multi-sheet ke satu file Excel
 * @param {Array} sheets - Array of { name: "Sheet1", data: [...] }
 * @param {String} fileName - Nama file tanpa ekstensi
 */
export function exportMultiSheetExcel(sheets, fileName = "export") {
  if (!sheets || sheets.length === 0) {
    alert("Tidak ada data untuk di-export.");
    return;
  }

  const workbook = XLSX.utils.book_new();

  sheets.forEach((sheet) => {
    if (!sheet.data || sheet.data.length === 0) return;

    const worksheet = XLSX.utils.json_to_sheet(sheet.data);

    // Auto-width kolom
    const colWidths = Object.keys(sheet.data[0]).map((key) => {
      const maxLength = Math.max(
        key.length,
        ...sheet.data.map((row) => String(row[key] ?? "").length)
      );
      return { wch: maxLength + 2 };
    });
    worksheet["!cols"] = colWidths;

    // Nama sheet maksimal 31 karakter
    const safeName = sheet.name.slice(0, 31);
    XLSX.utils.book_append_sheet(workbook, worksheet, safeName);
  });

  const date = new Date().toISOString().slice(0, 10);
  const fullFileName = `${fileName}-${date}.xlsx`;
  XLSX.writeFile(workbook, fullFileName);
}