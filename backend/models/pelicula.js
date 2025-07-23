const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: String,
  descripcion: String,
  poster: String
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
