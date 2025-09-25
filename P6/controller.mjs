// controller.mjs
import users from "./data.mjs";

// 1. Lihat semua data
const index = () => {
  console.log("Daftar Users:");
  users.map((user, i) => {
    console.log(
      `${i + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, ${
        user.email
      }`
    );
  });
};

// 2. Tambah data baru
const store = (user) => {
  users.push(user);
  console.log(`User baru ditambahkan: ${user.nama}`);
};

// 3. Hapus data (berdasarkan index)
const destroy = (indexUser) => {
  if (indexUser >= 0 && indexUser < users.length) {
    const deleted = users.splice(indexUser, 1);
    console.log(`User dihapus: ${deleted[0].nama}`);
  } else {
    console.log("Index tidak valid, data gagal dihapus.");
  }
};

export { index, store, destroy };
