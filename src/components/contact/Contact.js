import React from 'react'
import './contact.css'
import Navbar from '../../components/navbar/Navbar'
import Navigation from '../navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'

function Contact() {
    const cartItems = useSelector((state) => state.cart.data)
    const wishItems = useSelector((state) => state.cart.wishlist)
    return (
        <div>
            <Navbar count={cartItems.length} wishCount={wishItems.length} />
            <Navigation page="Contacts" />
            <div className="heading">
                <span>Contacts</span>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="contactcover">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contactForm">
                                    <div className="form-title">
                                        <span>Send your question</span>
                                    </div>
                                    <div className="form">
                                        <form>
                                            <div className="input">
                                                <label htmlFor="">Your Name</label>
                                                <input type="text" name="" id="" />
                                            </div>
                                            <div className="input">
                                                <label htmlFor="">Your Email</label>
                                                <input type="email" name="" id="" />
                                            </div>
                                            <div className="input">
                                                <label htmlFor="">Your Message</label>
                                                <textarea name="" id="" cols="40" rows="7"></textarea>
                                            </div>
                                            <div className="sendBtn">
                                                <button type='submit'>Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="information">
                                    <div className="address">
                                        <span>Address</span>
                                        <ul>
                                            <li className='icon'><i class="fa fa-map-marker" aria-hidden="true"></i></li>
                                            <li className='text'>725 5th Ave, New York, NY 10022, USA</li>
                                        </ul>
                                    </div>
                                    <div className="address">
                                        <span>Phones</span>
                                        <ul>
                                            <li className='icon'><i class="fa fa-phone" aria-hidden="true"></i></li>
                                            <li className='text'>712-339-9294</li>
                                     
                                        </ul>
                                        <ul>
                                        <li className='icon'><i class="fa fa-phone" aria-hidden="true"></i></li>
                                            <li className='text'>712-339-9295</li>
                                        </ul>
                                    </div>
                                    <div className="address">
                                        <span>Email</span>
                                        <ul>
                                            <li className='icon'><i class="fa fa-envelope-o" aria-hidden="true"></i></li>
                                            <li className='text'>info@modernotheme.com</li>
                                        </ul>
                                    </div>
                                    <div className="address">
                                        <span>Working hours</span>
                                        <ul>
                                            <li className='icon'><i class="fa fa-clock-o" aria-hidden="true"></i></li>
                                            <li className='text'>Mon-Fri: 10:00 - 18:00</li>
                                        </ul>
                                    </div>
                                    <div className="address">
                                      <span>Follow us</span>
                                      <ul className="social">
                                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-whatsapp" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact