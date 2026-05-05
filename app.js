const app = require('./src/infrastructure/server');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}/api/hello`);
});