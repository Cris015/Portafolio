import { useState } from 'react';
import "../styles/Header.css";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <h1>PORTAFOLIO</h1>
      <button className="menu-btn" onClick={() => setMenuAbierto(true)}>
        ☰
      </button>

      <nav
        className={`menu-modal ${menuAbierto ? 'abierto' : ''}`}
        onClick={(e) => {
          // Si el usuario hace clic directamente en el fondo (nav), cerramos el menú
          if (e.target.classList.contains('menu-modal')) {
            setMenuAbierto(false);
          }
        }}
      >
        <button className="cerrar-btn" onClick={() => setMenuAbierto(false)}>
          ✕
        </button>
        <a href="#sobremi" onClick={() => setMenuAbierto(false)}>Sobre mí</a>
        <a href="#proyectos" onClick={() => setMenuAbierto(false)}>Proyectos</a>
        <a href="#formaciones" onClick={() => setMenuAbierto(false)}>Estudios</a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
      </nav>
    </header>
  );
}