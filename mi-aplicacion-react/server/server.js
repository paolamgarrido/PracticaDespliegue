// Importa el framework Express
const express = require('express');

// Importa el módulo 'path' para manejar rutas de archivos de forma segura
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto donde se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS, imágenes, etc.)
// Sirve desde la carpeta 'dist', que es donde está la versión compilada del frontend
app.use(express.static(path.join(__dirname, '../dist')));

// Ruta opcional para verificar que el servidor está funcionando
// Si visitas /api/health, te responderá con un objeto JSON
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Inicia el servidor y lo pone a escuchar en el puerto definido
// También muestra un mensaje en consola con la URL del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});