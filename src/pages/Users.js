import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users() {
  const users = [
    { id: 1, name: 'Ian Andres Abadia Alba', email: 'ianandres@gmail.com', role: 'Administrador' },
    { id: 2, name: 'Carlos Andres Viveros', email: 'carlosviveros@gmail.com', role: 'Programador Full Stack' },
    { id: 3, name: 'Rosa Isabel Rosero Cartagena', email: 'rosarosero@gmail.com', role: 'Moderador' },
    { id: 4, name: 'Rubén Alejandro días Cardenas', email: 'rubendias@gmail.com', role: 'Diseñador Backend' },
    { id: 5, name: 'Ana Laura Valencia Martínez', email: 'anavalencia@gmail.com', role: 'Diseñadora Frontend' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Nuestro equipo de trabajo:</h2>
      
      {/* Tabla de usuarios */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-info btn-sm me-2">Contactar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
