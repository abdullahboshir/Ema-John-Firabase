import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./reviewItem.css";

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props;
    const {name, price, shipping, quantity, img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='product-deatails'>
            <div>
            <h3 title={name}>
                {name.length > 20? name.slice(0, 20) + "..." : name}
                </h3>
            <p>Price: {price}</p>
            <p>Shipping Charge: {shipping}</p>
            <p><small>Quantity: {quantity}</small></p>
            </div>
            </div>
            <div>
            <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default ReviewItem;