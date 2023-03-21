import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produklist from "./components/ProdukList";
import AddProduk from "./components/addProduk";
import EditProduk from "./components/editProduk";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produklist />} />
        <Route path="add" element={<AddProduk />} />
        <Route path="edit/:id" element={<EditProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
