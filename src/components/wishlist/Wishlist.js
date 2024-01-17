import React from 'react'
import './wishlist.css'
import '../cart/cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromWishlist } from '../../app/cartSlice';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer'
import emptyWishlist from '../../assets/emptyWishlist.png'
import WishlistItem from './WishlistItem';

function Wishlist() {
    const wishItems = useSelector((state) => state.cart.wishlist);
    const cartItems = useSelector((state) => state.cart.data);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    console.log(wishItems)


    const addItem = (itemId) => {
        dispatch(addToCart(wishItems.find(item => item.id === itemId)))

        // navigate('/cart')
    }

    const removeWishlist = (itemId) => {
        dispatch(removeFromWishlist(itemId));
    };

    // const updateQuantity = (itemId, newQuantity) => {
    //     if (!isNaN(newQuantity) && newQuantity >= 1) {
    //         dispatch(updateWishlistQuantity({ itemId, quantity: newQuantity }));
    //     }
    // };

    return (
        <div>
            <Navbar count={cartItems.length} wishCount={wishItems.length}/>
            <Navigation page="Wishlist" />
            <div className="cart1">
                <div className="cartBody">
                    {wishItems.length ? (
                        <div className="heading">
                            <span>Wishlist</span>
                        </div>
                    ) : (
                        <>

                            <div className='emptyCart'>
                                <div className="image">
                                    <img src={emptyWishlist} alt="" />
                                </div>
                                <div className="content">
                                    <span>Your Wishlist Is Currently Empty</span>
                                    <p>Click the
                                        &nbsp;<i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp; icon to add products
                                    </p>
                                </div>
                                <div className="homeButton">
                                    <Link to='/'>
                                        <button >Return to shop</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                    {wishItems.length > 0 && (
                        <div className="cartCover">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cartItem wishlistItemAlso">
                                            <table cellSpacing='0' cellPadding='15px'>
                                                <thead>
                                                    <tr>
                                                        <th colSpan='2' className='productCartHeading'>Product</th>
                                                        <th>Price</th>
                                                        <th>Stock Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {wishItems.map((item) => (
                                                        <WishlistItem
                                                            key={item.id}
                                                            item={item}
                                                            removeWishlist={removeWishlist}
                                                            addItem={addItem}
                                                        />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Wishlist
