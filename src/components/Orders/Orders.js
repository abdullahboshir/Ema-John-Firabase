import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./orders.css"

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate()

    const handleRemoveProduct = product =>{
        setCart(cart.filter(pro => pro.id !== product.id));
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
         <div className="review-items-container">
            {
                cart.map(product => <ReviewItem 
                    key = {product.id}
                    product = {product}
                    handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
            }
         </div>
         <div className="cart-container">
             <Cart 
             cart = {cart}> 
             <button onClick={() => navigate("/inventory")}>Proceed Checkout</button>
             {/* <Link to = "/inventory"><button>Proceed Checkout</button></Link> */}
             </Cart>
         </div>
        </div>
    );
};

export default Orders;