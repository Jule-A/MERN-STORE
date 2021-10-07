import './HomeScreen.css';
import Product from '../components/Product';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="homescreen">
            <div className="homescreen-search">
                <h2 className="homescreen-title">Buscar producto</h2>
                <input type="text" placeholder="Buscar" onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}/>
            </div>
            <h2 className="homescreen-title">Productos</h2>
            <div className= "homescreen-products">
                {loading? (
                <h2>Cargando...</h2>
                ): error? (
                <h2>{error}</h2>
                ): (
                products.filter((prod) => {
                    if ( searchTerm==="" ){
                        return prod
                    } else if ( prod.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
                        return prod
                    }
                }).map(product => <Product 
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    />)
                )}
            </div>
        </div>
    )
}

export default HomeScreen
