import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav>
      <h2 className="nombrePizzeria">Pizzería Mamma Mía   </h2>
      <button>🍕 Home</button>

      {token ? (
        <>
          <button>🔓 Profile</button>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <button>🔐 Login</button>
          <button>🔐 Register</button>
        </>
      )}

      <button className="total">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
};

export default Navbar;
