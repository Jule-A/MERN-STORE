import './CartScreen.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';


import CartItem from '../components/CartItem'

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => { }, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    return (
        <div className="cartscreen">
            <div className="cartscreen-left">
                <div className="cartscreen-logo">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>
                        <h2>Bolsa</h2>
                    </span>
                </div>
                {cartItems.length === 0 ? (
                    <div>
                        La bolsa está vacía <Link to="/" className="cartscreen-link">Regresar</Link>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.product}
                            item={item}
                            qtyChangeHandler={qtyChangeHandler}
                            removeHandler={removeFromCartHandler}
                        />
                    ))
                )}
            </div>
            <div className="cartscreen-right">
                <div className="cartscreen-info">
                    <p>Subtotal ({getCartCount()}) Items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <Link to="/login">
                        <button disabled={false}>Realizar compra</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
