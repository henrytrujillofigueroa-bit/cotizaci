import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // 👈 permite peticiones desde Netlify
app.use(express.json());

app.post("/login", (req, res) => {
  const { usuario, clave } = req.body;

  if (usuario?.trim().toLowerCase() === "admin" && clave?.trim() === "1234") {
    res.json({ ok: true });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));