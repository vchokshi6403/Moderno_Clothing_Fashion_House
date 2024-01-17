import React from 'react'
import { Link } from 'react-router-dom'

function WishlistItem({item,removeWishlist,addItem}) {

    return (
        <>
            <tr>
                <td colSpan={5}></td>
            </tr>
            <tr className='cartProduct'>
                <button className='removeCart' onClick={() => removeWishlist(item.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <td className='productImg'>
                    <img src={item.image} alt={item.title} />
                </td>
                <td className="productDesc">
                    <div className="productTitle">
                        <span>{item.title}</span>
                    </div>
                </td>
                <td className='subtotal'>
                    <span>$ {item.price }</span>
                </td>
                <td className="stock">
                    <span>{item.stock}</span>
                </td>
                <td className='cartbtn'>
                    <Link to='/cart'>
                       <button className='cartButton' onClick={()=>addItem(item.id)}>+ &nbsp;&nbsp;&nbsp;
                       Add to cart</button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default WishlistItem