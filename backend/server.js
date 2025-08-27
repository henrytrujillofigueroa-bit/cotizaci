import express from "express";
import cors from "cors";

const app = express(); // ✅ primero creamos la app

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend
  credentials: true
}));
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.post("/login", (req, res) => {
  const { usuario, clave } = req.body;
  if (usuario === "admin" && clave === "1234") {
    return res.json({ mensaje: "Login correcto", usuario });
  } else {
    return res.status(401).json({ mensaje: "Credenciales inválidas" });
  }
});

app.get("/cotizacion", (req, res) => {
  res.json({ cotizacion: "Cotización N°123 Rev-1" });
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
