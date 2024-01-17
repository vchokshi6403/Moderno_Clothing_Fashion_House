import React, { useEffect } from 'react'
import './navbar.css'
import logo2 from '../../assets/logo2.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../app/cartSlice'

function Navbar() {
  const cartitems = useSelector((state) => state.cart.data)
  const wishitems = useSelector((state) => state.cart.wishlist)
  const isLoggedIn = useSelector(state => state.cart.user)

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("header"); 

      if (document.documentElement.scrollTop > 50 || window.pageYOffset > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const removeItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }
  let totalAmount = () => {
    const total = cartitems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );

    return (total).toFixed(2);
  };
  const total = parseFloat(totalAmount());
 

  return (

    <div className="Main" id='header'>
      <div className="Navbar">
        <div className="navbar-left">
          <span>Best Special Offers ! 40% Off</span>
        </div>
        <div className="navbar-middle">
          <div className="logo">
            <img src={logo2} alt="" />
          </div>
        </div>
        <div className="navbar-right">
          <ul>
            <li className='user'>
              <Link to='/login'>
                <button>
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </button>
              </Link>
              <img src={isLoggedIn.image} alt="" />
            </li>
            <li>
              <Link to='/wishlist'>
                <button>
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </button>
                <span className='cart'>{wishitems.length}</span>
              </Link>
            </li>
            <li>
              <div className="cartList">
                <Link to='/cart'>
                  <button className='addCart'>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  </button>
                  <span className='cart item'>{cartitems.length}</span>
                  <div className="cartShow">
                    <div className="cart-product" >
                      <ul className='product-list'>
                        {cartitems.length ?
                          cartitems.map((item) => (
                            <li className='product-item' key={item.id}>
                              <div className="product-wrap">
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => removeItem(item.id)}></i>
                                <div className="itemimg">
                                  <img src={item.image} alt="" />
                                </div>
                                <div className="itemDesc">
                                  <div className="itemtitle">
                                    <span>{item.title}</span>
                                  </div>
                                  <div className="itemprice">
                                    <span>$ {item.price}</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )) :
                          (
                            <li className='empty'>
                              <span>No products in the cart.</span>
                            </li>
                          )}
                      </ul>
                      {cartitems.length > 0 ?
                        <div className="subTotal">
                          <span className="totalprice">Subtotal</span>
                          <span className="amount">
                            $ {total}
                          </span>
                        </div> : <></>}
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Navbar-bottom">
        <div className="menu">
          <ul>
            <li>
              <Link to='/'> Home</Link>
            </li>
            <li>
              <Link to='/shop'> Shop</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link></li>
            <li>
              <Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar