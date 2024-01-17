import React from 'react'
import Navbar from '../navbar/Navbar'
import Navigation from '../navigation/Navigation'
import order from '../../assets/checkout.png'
import './order.css'
import Footer from '../footer/Footer'

function Order() {
    return (
        <div>
            <Navbar />
            <Navigation page="CheckOut" />
            <div className="orderPlaced">
                <div className="container">
                    <div className="col-md-12">
                        <div className="orderdetails">
                            <div className='emptyCart'>
                                <div className="image">
                                    <img src={order} alt="" />
                                </div>
                            </div>
                            <div className="heading">
                                <span>Thank You. Your order has been placed.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Order