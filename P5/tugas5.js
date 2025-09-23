// Data Produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headset", harga: 800000 },
  { id: 4, nama: "Keyboard", harga: 600000 },
  { id: 5, nama: "Mouse", harga: 250000 },
];

// nama fungsi bebas (event handler untuk simulasi tombol)
const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (id) => hapusProduk(id),
  tampil: () => tampilkanProduk(),
};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`Produk ${nama} berhasil ditambahkan ✅`);
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) {
  produkList = produkList.filter((produk) => !id.includes(produk.id));
  console.log(`Produk dengan ID ${id} berhasil dihapus ❌`);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
  });
  console.log("=====================\n");
}

// Testing
tampilkanProduk();

// tambah produk baru
eventHandler.tambah(6, "Tablet", 7000000);

// hapus produk id 2
eventHandler.hapus(2);

// tampilkan lagi
eventHandler.tampil();
