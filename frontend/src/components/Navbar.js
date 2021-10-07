import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <i className="fa-solid fa-carrot"></i>
                    <h2>Mercado</h2>
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        <span>
                            Inicio
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="login-link">

                        <span>
                            Iniciar sesión
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="login-link">
                        <span>
                            Registrarse
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart-link">
                        <i className="fas fa-bag-shopping"></i>
                        <span>
                            Bolsa
                            <span className="cartlogo-badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
            </ul>
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
