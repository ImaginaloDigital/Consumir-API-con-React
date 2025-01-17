import React from 'react';

// Función para poner la primera letra en mayúsculas y el resto en minúsculas
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const ProductCard = ({ product, onView }) => (
  <div className="card">
    <img src={product.image} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">
        {capitalizeFirstLetter(product.name)}  {/* Capitalizamos el nombre */}
      </h5>
      <p className="card-text">Estado: {product.status}</p>
      <button className="btn btn-primary" onClick={onView}>
        Ver
      </button>
    </div>
  </div>
);

export default ProductCard;
