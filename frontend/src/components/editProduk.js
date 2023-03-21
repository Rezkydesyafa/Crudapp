import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export const EditProduk = () => {
  const [nama_produk, setName] = useState("");
  const [keterangan, setKeterngan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8000/produk/${id}`);
    setName(response.data.nama_produk);
    setKeterngan(response.data.keterangan);
    setHarga(response.data.harga);
    setJumlah(response.data.jumlah);
  };

  const UpdateProduk = async (e) => {
    e.preventDefault();
    try {
      console.log(id);
      await axios.patch(`http://localhost:8000/produk/${id}`, {
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
          <form onSubmit={UpdateProduk}>
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
                Edit Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduk;
