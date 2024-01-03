const { Animal } = require("../models/animals");

const validarEdad = async (req, res, next) => {
  const edad = req.body.edad;
  if (edad > 15) {
    return res.status(400).json({
      error: "La edad del animal no puede ser mayor a 15 años",
    });
  }
  next();
};

module.exports = validarEdad;
