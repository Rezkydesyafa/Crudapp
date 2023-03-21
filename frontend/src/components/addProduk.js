import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AddProduk = () => {
  const [nama_produk, setName] = useState("");
  const [keterangan, setKeterngan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();
  const saveProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/produk", {
        nama_produk,
        keterangan,
        harga,
        jumlah,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="colum mt-6 is-centered mx-6">
        <div className="colums is-half">
          <form onSubmit={saveProduk}>
            <div className="filed">
              <label>Name</label>
              <div className="control">
                <input
                  class="input is-success"
                  value={nama_produk}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="filed">
              <label>Keterangan</label>
              <div className="control">
                <input
                  class="input is-success"
                  value={keterangan}
                  onChange={(e) => setKeterngan(e.target.value)}
                  type="text"
                  placeholder="Keterangan"
                />
              </div>
            </div>
            <div className="filed">
              <label>Harga</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  placeholder="Harga"
                />
              </div>
            </div>
            <div className="filed">
              <label>Jumlah</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  placeholder="Jumlah"
                />
              </div>
            </div>
            <div className="filed">
              <button type="submit" className="button is-success mt-4">
                Tambah Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduk;
