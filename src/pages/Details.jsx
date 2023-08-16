import { Rating } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLoaderData } from 'react-router-dom';
import Loader from '../components/Loader';
import LINKS from '../LINKS';

export default function Deatils() {
    const {product, loading, addToCart, cart} = useLoaderData()(useParams().id);
    let isCartProduct = false;
    const navigate = useNavigate();

    cart.map(e => {
        if(e.id == product.id)
            isCartProduct = true;
    })
    
    if (loading){
        return  <Loader></Loader>
    }

    if(!product){
        throw new Error('Product Not Found');
    }

    return (<div className="details page">
        <h3>{product.title}</h3>
        <div>{product.category}</div>
        <img className="image" src={product.image} alt={product.title} />
        <h3>Price ${product.price}</h3>
        <h4>Ratings</h4>
        <Rating name="read-only" value={product.rating.rate} readOnly />
        <div>{product.description}</div>
        {isCartProduct 
        ? <button className='btn-pm' onClick={() => navigate(LINKS.cart)}>View in cart</button>
        : <button className='add-to-cart' onClick={(e) => addToCart(e, product)}>
        <ShoppingCartIcon/>
            Add to cart
            </button>}
    </div>)
}
