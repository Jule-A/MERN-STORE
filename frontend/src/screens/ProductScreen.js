import './ProductScreen.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Cargando...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen-left">
                        <div className="info-image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left-info">
                            <p className="left-name">{product.name}</p>
                            <p>Precio: ${product.price}</p>

                        </div>
                    </div>
                    <div className="productscreen-right"></div>
                    <div className="right-info">
                        <p className="">
                            Precio: <span>${product.price}</span>
                        </p>
                        <p>
                            Estado: <span>{product.countInStock > 0 ? "En Stock" : "Sin Stock"}</span>
                        </p>
                        <p>
                            Cantidad:
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={addToCartHandler}>Agregar a la bolsa</button>
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductScreen
