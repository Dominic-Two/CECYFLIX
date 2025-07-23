const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const peliculasRouter = require('./routes/peliculas');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

app.use('/api/peliculas', peliculasRouter);

app.listen(4000, () => console.log('🚀 Backend corriendo en http://localhost:4000'));

mongoose.connection.once('open', async () => {
  const Pelicula = require('./models/pelicula');
  const total = await Pelicula.countDocuments();
  console.log(`🎬 Películas encontradas en MongoDB: ${total}`);
});
