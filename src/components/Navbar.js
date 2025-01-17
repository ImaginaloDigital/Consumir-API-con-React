import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const location = useLocation(); // Hook para obtener la ubicación actual

  // Función para obtener el mensaje de bienvenida desde la API
  const fetchWelcomeMessage = async () => {
    try {
      const response = await fetch('https://api.example.com/welcome'); // Cambia este URL por el endpoint real
      const data = await response.json();
      setWelcomeMessage(data.message); // Asumiendo que el mensaje está en data.message
    } catch (error) {
      console.error('Error al obtener el mensaje de bienvenida:', error);
      setWelcomeMessage('¡Bienvenid@! a nuestra API de Pokemon'); // Mensaje por defecto en caso de error
    }
  };

  // Solo hacemos la solicitud si estamos en la ruta de inicio ("/")
  useEffect(() => {
    if (location.pathname === '/') {
      fetchWelcomeMessage();
    }
  }, [location]); // El efecto se ejecuta cada vez que cambia la ruta

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Inicio</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/users">Somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Personajes Pokemon</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Perfil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mostrar el mensaje de bienvenida solo si estamos en la página de inicio */}
      {location.pathname === '/' && welcomeMessage && (
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: '40vh' }}>
          <div className="alert alert-info" role="alert">
            {welcomeMessage}
          </div>
        </div>
      )}

      {/* Renderizar el Outlet para las rutas secundarias */}
      <Outlet />
    </div>
  );
};

export default Navbar;


