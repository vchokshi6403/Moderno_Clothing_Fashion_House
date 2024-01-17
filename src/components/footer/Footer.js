import React from 'react'
import './footer.css'
import paymentCards from '../../assets/payment.png'


function Footer() {
  return (
    <div className="footer">
    <div className="footer-details">
        <div className="row">
            <div className="col-md-4">
                <div className="footer-left">
                    <div className="title">
                        <span>
                            SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER AND STAY UP TO DATE ON THE LATEST PRODUCT RELEASES, SPECIAL OFFERS AND NEWS
                        </span>
                    </div>
                    <div className="email">
                        <input type="email" placeholder='Your Email *' />
                    </div>
                    <div className="subsButton">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="list">
                    <ul>
                        <li>Shop</li>
                        <li>FAQ</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Careers</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="footer-right">
                    <div className="first">
                        <span>
                            If you have any questions regarding your order, products or our service, please contact our customer service.
                        </span>
                    </div>
                    <div className="details">
                        <ul>
                            <li>
                                Monday - Friday :  <span>10:00 am - 6:00 pm</span>
                            </li>
                            <li>
                                Phone : <span>+1 712-339-9294</span>
                            </li>
                            <li>
                                Email : <span>info@moderno.com</span>
                            </li>
                            <li>
                                Address : <span>283 N. glenwood street, levit town , NY</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="payment">
                <img src={paymentCards} alt="" />
            </div>
            <div className="copyright">
                <span>©️2023 Moderno Theme All Rights Reserved </span>
            </div>
            <div className="social">
                <ul>
                    <li>
                        <span>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer