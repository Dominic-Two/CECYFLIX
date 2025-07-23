import React, { useState } from 'react';

const FormularioAgregar = ({ recargarPeliculas }) => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [poster, setPoster] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nueva = { titulo, genero, poster, descripcion };

    try {
      const res = await fetch('https://recomendaciones-backend-wum9.onrender.com/api/peliculas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nueva)
      });

      if (res.ok) {
        setTitulo('');
        setGenero('');
        setPoster('');
        setDescripcion('');
        recargarPeliculas();
      }
    } catch (err) {
      console.error('Error al agregar película:', err);
    }
  };

  return (
    <form className="formulario-agregar" onSubmit={handleSubmit}>
      <h2>Agregar nueva película</h2>
      <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" required />
      <input value={genero} onChange={e => setGenero(e.target.value)} placeholder="Género" />
      <input value={poster} onChange={e => setPoster(e.target.value)} placeholder="URL del póster" />
      <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripción" />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioAgregar;
