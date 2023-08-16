import Cart_Item from "../components/Cart_Item";
import { useLoaderData } from "react-router-dom";
import Loader from '../components/Loader';
import { useState } from "react";

export default function Cart(){
    const {cart, setCart, loading} = useLoaderData();
    let totalItems = 0;
    let price = 0;
    cart.map(e => {
        totalItems += e.quantity;
        price += e.quantity * e.price
    });

    if (loading) {
        return <Loader></Loader>
    }

    return (
    <div className="page">
    <h1>Your shopping Cart</h1>
    {   cart.map(
        item => <Cart_Item {...item} key={item.id} setCart={setCart} cart={cart}>
        </Cart_Item>)

   }

   {cart.length > 0 && <div className="card flex board">
    <h2>Check Out</h2>
    <h3>Total Items: {totalItems}</h3>
    <h3>Total: {price.toFixed(2)}</h3>
    <h4><button className="add-to-cart" onClick={() => setCart([])}>Confirm</button></h4>
    </div>
    ||  <div className="board flex">
    <h2>Your Cart is Empty</h2>
    </div>
    }

    </div>
    );
}