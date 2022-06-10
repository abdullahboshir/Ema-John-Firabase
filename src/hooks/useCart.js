import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storeedCart = getStoredCart();
        const savedCart = [];
        for(const id in storeedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storeedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);  
            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart];
};

export default useCart;