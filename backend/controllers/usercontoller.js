import produk from "../models/userModels.js";
export const getUser = async (req, res) => {
  try {
    const response = await produk.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.mesagge);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await produk.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.mesagge);
  }
};
export const creatUser = async (req, res) => {
  try {
    await produk.create(req.body);
    res.status(201).json({ msg: "user created" });
  } catch (error) {
    console.log(error.mesagge);
  }
};
export const UpdateProduk = async (req, res) => {
  try {
    await produk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "user uptaded" });
  } catch (error) {
    console.log(error.mesagge);
  }
};
export const deleteProduk = async (req, res) => {
  try {
    await produk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "user deleted" });
  } catch (error) {
    console.log(error.mesagge);
  }
};
