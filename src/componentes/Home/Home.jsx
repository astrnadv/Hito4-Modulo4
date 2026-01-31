import { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="home-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
