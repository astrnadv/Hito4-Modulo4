import Navbar from "./componentes/NavBar/NavBar";
import Home from "./componentes/Home/Home";
import Footer from "./componentes/Footer/Footer";
import Register from "./componentes/Register/Register";
import Login from "./componentes/Login/Login";
import "./App.css";
import Cart from "./componentes/Cart/Cart"
import Pizza from "./componentes/Pizza/Pizza";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="container">
        {/*<Home />*/}
        {/*<Register />*/}
        {/*<Login />*/}
        {/*<Cart /> />*/}
        <Pizza />
      </main>

      <Footer />
    </>
  );
};

export default App;
