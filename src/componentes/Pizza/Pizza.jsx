import { useEffect, useState } from "react";
import style from './Pizza.module.css';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className={style.contenedorPizza}>
      <img
        src={pizza.img}
        alt={pizza.name}
        className={style.imagenPizza}
      />

      <div className={style.infoPizza}>
        <h2>{pizza.name}</h2>

        <p className={style.descripcion}>{pizza.desc}</p>

        <h4>Ingredientes:</h4>
        <ul>
          {pizza.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        <h3>Precio: ${pizza.price}</h3>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;
