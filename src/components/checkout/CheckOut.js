/*global google */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './checkout.css'
import Navbar from '../navbar/Navbar';
import Navigation from '../navigation/Navigation';
import logo from '../../assets/logo2.svg'

function Checkout() {
  const cartItems = useSelector((state) => state.cart.data);
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [googlePayClient, setGooglePayClient] = useState(null);
  let totalAmount = () => {
    const total = cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );

    return (total).toFixed(2);
  };
  const total = parseFloat(totalAmount());
  console.log(total);


  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_ABPoKYcYipgQ4f",
      currency: "USD",
      amount: amount * 100,
      name: "Moderno",
      description: "Thanks for purchasing",
      image:logo,

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Moderno",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
 
  }, [total, navigate]);


  return (
    <>
      <Navbar />
      <Navigation page="Checkout" />
      <div className="checkout">
        <div className="heading">
          <span>Checkout</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
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
                  <div className="order">
                    <span>Your Order</span>
                    <ul>
                      {cartItems.map((item) =>
                        <li>
                          <span className='orderItem'>
                            {item.title} X {item.quantity}
                          </span>
                          <span className='orderPrice'>$ {item.price * item.quantity}</span>
                        </li>
                      )}
                    </ul>
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
                                <input type="radio" name="shippingMethod" checked='checked' />
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
                          <span>$ {formatter.format(total + 10)}
                          </span>
                        </td>
                      </tr>
                    </table>
                    <div className="paymentMethod">
                      <span>Payment method</span>
                      <ul>
                        <li>
                          <input type="radio" name="payment" id="cardPayment"  onClick={() => displayRazorpay(total+ 10)} />
                          <label htmlFor="">Card payment</label>
                        </li>
                        <li>
                          <input type="radio" name="payment" id="cashOnDelivery"
                            onChange={() => setSelectedPaymentMethod('cashOnDelivery')} />
                          <label htmlFor="">Cash on delivery</label>
                        </li>
                      </ul>
                    </div>
                    <div className="checkout">
                      <button className="checkoutbtn">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
