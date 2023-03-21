import express from "express";
import {
  getUser,
  getUserById,
  creatUser,
  UpdateProduk,
  deleteProduk,
} from "../controllers/usercontoller.js";

const router = express.Router();

console.log(getUser);

router.get("/produk", getUser);
router.get("/produk/:id", getUserById);
router.post("/produk", creatUser);
router.patch("/produk/:id", UpdateProduk);
router.delete("/produk/:id", deleteProduk);
export default router;
