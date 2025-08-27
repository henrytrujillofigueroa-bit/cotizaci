import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // 👈 permite peticiones desde Netlify
app.use(express.json());

app.post("/login", (req, res) => {
  const { usuario, clave } = req.body;

 HEAD
  // Normalizamos los datos (quitamos espacios y pasamos a minúsculas)
  const user = usuario?.trim().toLowerCase();
  const pass = clave?.trim();

  if (user "ronalsrl" && pass "997851088ntF$") {
  if (usuario?.trim().toLowerCase() "ronalsrl" && clave?.trim() "997851088ntF$") {
aed99562ad70132d76004c3258cb9bd750dd87fe
    res.json({ ok: true });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
