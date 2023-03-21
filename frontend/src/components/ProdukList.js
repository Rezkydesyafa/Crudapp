import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProdukList = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    getProduk();
  }, []);

  const getProduk = async () => {
    const response = await axios.get("http://localhost:8000/produk");
    setProduk(response.data);
  };
  const deletedProduk = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8000/produk/${id}`);
      getProduk();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="continer">
      <h2 class="title is-2 mt-6 has-text-success has-text-centered">
        Table Daftar Produk
      </h2>
      <div className="columns is-centered mt-6">
        <div className="colum is-half">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Keterangan</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {produk.map((produk, index) => (
                <tr key={produk.id}>
                  <td>{index + 1}</td>
                  <td>{produk.nama_produk}</td>
                  <td>{produk.keterangan}</td>
                  <td>{produk.harga}</td>
                  <td>{produk.jumlah}</td>
                  <td>
                    <Link
                      to={`edit/${produk.id}`}
                      className="button is-small is-info"
                    >
                      edit
                    </Link>
                    <button
                      onClick={() => deletedProduk(produk.id)}
                      className="button is-small is-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"add"} className="button is-success">
            add new
          </Link>
        </div>
        <div />
      </div>
      <p className=" title is-5 mt-6 has-text-success has-text-centered">
        By: Mohamad Dwi Rezky Desyafa
      </p>
    </div>
  );
};

export default ProdukList;
