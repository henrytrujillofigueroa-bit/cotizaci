import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ usuario, clave })
      });

      const data = await res.json();
      if (data.ok) {
        setMensaje(`✅ Bienvenido ${data.usuario}`);
        // Aquí rediriges a cotización
        window.location.href = "/cotizacion";
      } else {
        setMensaje("❌ Usuario o clave incorrectos");
      }
    } catch (err) {
      setMensaje("⚠️ Error en el servidor");
    }
  };

  return (
    <form onSubmit={enviarLogin}>
      <h2>Ingresar</h2>
      <input type="text" placeholder="Usuario"
        value={usuario} onChange={e => setUsuario(e.target.value)} />
      <br/>
      <input type="password" placeholder="Contraseña"
        value={clave} onChange={e => setClave(e.target.value)} />
      <br/>
      <button type="submit">Entrar</button>
      <p>{mensaje}</p>
    </form>
  );
}

export default Login;
