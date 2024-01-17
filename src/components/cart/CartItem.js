import React from 'react'
import '../cart/cart.css'
import { useNavigate } from 'react-router-dom';

function CartItem({ item, updateQuantity, removeCart }) {
    const navigate = useNavigate();
    const handleProductClick = (productId) => {
        // Navigate to the product details page
        navigate(`/product/${productId}`);
    };
    console.log("item ", item)
    return (
        <>
            <tr>
                <td colSpan={4}></td>
            </tr>
            <tr className='cartProduct'>
                <button className='removeCart' onClick={() => removeCart(item.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <td className='productImg'>
                    <img src={item.image} alt={item.title} onClick={() => handleProductClick(item.id)} />
                </td>
                <td className="productDesc">
                    <div className="productTitle">
                        <span>{item.title}</span>
                    </div>
                    <div className="description">
                        <span>{item.overview}</span>
                    </div>
                    <div className="item-total">
                        <span>{item.quantity} X $ {item.price}</span>
                    </div>
                </td>
                <td className="quantity">
                    <select name="" id="" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td className='subtotal'>
                    <span>$ {item.price * item.quantity}</span>
                </td>
            </tr>
        </>
    )
}

export default CartItem
