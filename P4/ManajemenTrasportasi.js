// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  // Method untuk menampilkan detail penyewaan
  tampilkanInfo() {
    console.log(
      `Nama: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa}`
    );
  }
}

// Class Sistem Manajemen Transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Method untuk mencatat transaksi penyewaan
  sewaKendaraan(nama, nomorTelepon, kendaraanDisewa) {
    const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
    this.daftarPelanggan.push(pelangganBaru);
    console.log(`Transaksi berhasil dicatat untuk ${nama}`);
  }

  // Method untuk menampilkan semua pelanggan yang sedang menyewa
  tampilkanDaftarPelanggan() {
    console.log("=== Daftar Pelanggan yang Menyewa ===");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}.`);
      pelanggan.tampilkanInfo();
    });
  }
}

// Contoh penggunaan
const sistem = new SistemTransportasi();

sistem.sewaKendaraan("Ivan", "08123456789", "Mobil");
sistem.sewaKendaraan("Arxy", "08987654321", "Motor");

sistem.tampilkanDaftarPelanggan();
