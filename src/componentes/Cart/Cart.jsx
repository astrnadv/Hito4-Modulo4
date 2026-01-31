import { useState } from "react";
import { pizzaCart } from '../../data/pizzas';
import style from './Cart.module.css';

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart);

    const sumar = (id) => {
        setCart(
            cart.map((pizza) =>
                pizza.id === id
                    ? { ...pizza, count: pizza.count + 1 }
                    : pizza
            )
        );
    };

    const restar = (id) => {
        setCart(
            cart
                .map((pizza) =>
                    pizza.id === id
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                )
                .filter((pizza) => pizza.count > 0)
        );
    };

    const total = cart.reduce(
        (contador, pizza) => contador + pizza.price * pizza.count,
        0
    );

    return (
        <div className={style.cartContainer}>
            <h2 className={style.cartTitle}>Detalles del pedido</h2>

            {cart.map((pizza) => (
                <div key={pizza.id} className={style.cartItem}>
                    <img
                        src={pizza.img}
                        className={style.cartImage}
                    />

                    <span className={style.cartName}>{pizza.name}</span>

                    <span className={style.cartPrice}>
                        ${pizza.price.toLocaleString("es-CL")}
                    </span>

                    <div className={style.contador}>
                        <button
                            className={style.btnRestar}
                            onClick={() => restar(pizza.id)}
                        > -
                        </button>

                        <span>{pizza.count}</span>

                        <button
                            className={style.btnSumar}
                            onClick={() => sumar(pizza.id)}
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

            <div className={style.total}>
                Total: ${total.toLocaleString("es-CL")}
            </div>

            <button className={style.payButton}>Pagar</button>
        </div>
    );
};

export default Cart;