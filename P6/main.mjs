// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // tampilkan data awal
  index();

  console.log("\n--- Tambah 2 data baru ---");
  store({
    nama: "User Baru 1",
    umur: 30,
    alamat: "Jl. Baru 1",
    email: "baru1@email.com",
  });
  store({
    nama: "User Baru 2",
    umur: 31,
    alamat: "Jl. Baru 2",
    email: "baru2@email.com",
  });

  // tampilkan data setelah ditambah
  index();

  console.log("\n--- Hapus data ke-2 ---");
  destroy(1); // hapus data index ke-1 (user ke-2)

  // tampilkan data setelah dihapus
  index();
};

main();
