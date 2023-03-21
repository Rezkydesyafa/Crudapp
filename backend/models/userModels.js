import { Sequelize } from "sequelize";
import db from "../config/conection.js";

const { DataTypes } = Sequelize;

const produk = db.define(
  "produk",
  {
    nama_produk: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
  },
  { freezeTableName: true }
);

export default produk;

(async () => {
  await db.sync();
})();
