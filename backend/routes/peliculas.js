const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener películas' });
  }
});

// Agregar nueva película
router.post('/', async (req, res) => {
  try {
    const nuevaPelicula = new Pelicula(req.body);
    const peliculaGuardada = await nuevaPelicula.save();
    res.status(201).json(peliculaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar película', error });
  }
});

// Editar sinopsis de una película
router.put('/:id', async (req, res) => {
  try {
    const peliculaActualizada = await Pelicula.findByIdAndUpdate(
      req.params.id,
      { descripcion: req.body.descripcion },
      { new: true }
    );
    res.json(peliculaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar película', error });
  }
});

module.exports = router;
