import LINKS from '../LINKS';
import { useNavigate } from "react-router-dom";

export default function Cart_Item(product){
    const {
        id, 
        title, 
        image, 
        price, 
        quantity, 
        setCart, 
        cart
        } = product;

    const navigate = useNavigate();
        
    return <div className="card" key={id} id={id}>
        <img className="img" src={image} alt={title} />
        <h4>{title}</h4>
        <button className="btn-pm" onClick={() => {
            navigate(`${LINKS.products}${id}`);
        }}>Product Details</button>
        <h4>Price: ${price}</h4>
        
        <div className="flex">
        
        <button className="remove" onClick={()=>{
            let quantityNill = false;
           let temp = [...cart];
           temp.map( (e,i) => {
            if (e.id == id) {
                temp[i].quantity -= 1;
                if (temp[i].quantity <= 0)
                    quantityNill = true;
            }
           });
           if (quantityNill) {
            setCart([...temp.filter(e => e.id != id)]);
            return;
           }
           setCart([...temp]);
        }}>-</button>

<h4>QTY: {quantity}</h4>

        <button className="add" onClick={()=>{
           let temp = [...cart];
           temp.map( (e,i) => {
            if (e.id == id) {
                temp[i].quantity += 1;
            }
           });

           setCart([...temp]);
           }}>+</button>
            <button className="delete" onClick={() => setCart([...cart.filter(e => e.id != id)])}>Remove</button>
        </div>
       
    </div>

}