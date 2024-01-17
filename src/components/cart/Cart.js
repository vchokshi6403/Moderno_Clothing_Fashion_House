// Cart.js
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../app/cartSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import emptyCart from '../../assets/emptyCart.png'
import CartItem from './CartItem';
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation';

function Cart() {
    const cartItems = useSelector((state) => state.cart.data);
    console.log(cartItems)
    const wishItems = useSelector((state) => state.cart.wishlist);
    const dispatch = useDispatch();
    const loggedUsers = useSelector((state) => state.cart.user);
    const navigate = useNavigate();
    const [cart,setCart] = useState([]); 

    const removeCart = (itemId) => {
        dispatch(removeFromCart(itemId));
   
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            dispatch(updateCartItemQuantity({ itemId, quantity: newQuantity }));
        }
    };

    const checkout = () => {
        if (loggedUsers.length > 0) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };
    let totalAmount = () => {
        const total = cartItems.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );

        return (total).toFixed(2);
    };
    const total = parseFloat(totalAmount());
    console.log(total);


useEffect(()=>{
    if(!undefined && !NaN)
    {
        setCart(cartItems);
        console.log("Added to cartItems",cartItems)
    }
},[cartItems])

useEffect(()=>{
  
      
        console.log("Added to ",cart)
   
},[cart])


    return (
        <>
            <Navbar count={cart.length} wishCount={wishItems.length} />
            <Navigation page="cart" />
            <div className="cart1">
                <div className="cartBody">
                    {cart.length ? (
                        <div className="heading">
                            <span>Cart</span>
                        </div>
                    ) : (
                        <>

                            <div className='emptyCart'>
                                <div className="image">
                                    <img src={emptyCart} alt="" />
                                </div>
                                <div className="content">
                                    <span>Your Cart Is Currently Empty</span>
                                </div>
                                <div className="homeButton">
                                    <Link to='/'>
                                        <button>Return to shop</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                    {cart.length >0 && (
                        <div className="cartCover">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="cartItem">
                                            <table cellSpacing='0' cellPadding='15px'>
                                                <thead>
                                                    <tr>
                                                        <th colSpan='2' className='productCartHeading'>Product</th>
                                                        <th>Quantity</th>
                                                        <th>Subtotal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map((item) => {
                                                        return  <CartItem
                                                        key={item.id}
                                                        item={item}
                                                        updateQuantity={updateQuantity}
                                                        removeCart={removeCart}
                                                    />
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="totalPayment">
                                            <div className="cartTotal">
                                                <div className="coupon">
                                                    <div className="coupon-heading">
                                                        <span>Coupon Code</span>
                                                    </div>
                                                    <div className="coupon-body">
                                                        <input className='coupon-input' type="text" placeholder='Coupon Code' />
                                                        <button className='coupon-button'>Apply</button>
                                                    </div>
                                                </div>
                                                <div className="totalAmount">
                                                    <table>
                                                        <tr>
                                                            <th>Subtotal</th>
                                                            <td className='total' colSpan={2}>
                                                                <span>$ {total}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='shipping' colSpan={2}>
                                                                <span className='shipheading'>Shipping</span>
                                                                <div className='shiprates'>
                                                                    <ul>
                                                                        <li>
                                                                            <input type="radio" name="shippingMethod" checked='checked'/>
                                                                            <label >Flat Rate:</label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" name="shippingMethod" />
                                                                            <label htmlFor="">Pickup</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td className='shippingPrice' colSpan={2}><span>$ 10.00</span></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Total </th>
                                                            <td className='total' colSpan={2}>
                                                                <span>$ {total + 10}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div className="checkout">
                                                        <button className='checkoutbtn' onClick={() => checkout()} >Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
