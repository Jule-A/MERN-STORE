import './SideDrawer.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    const sideDrawerClass = ["sidedrawer"]
    if (show) {
        sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                        <span>
                            Inicio
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-bag-shopping"></i>
                        <span>
                            Bolsa
                            <span className="sidedrawer-badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <i className="fa-solid fa-user"></i>
                        <span>
                            Iniciar sesión
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <i className="fa-solid fa-user-plus"></i>
                        <span>
                            Registrarse
                        </span>
                    </Link>
                </li>
            </ul>
        </div>);
}

export default SideDrawer
