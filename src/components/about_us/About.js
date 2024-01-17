import React from 'react'
import './about.css'
import Navbar from '../../components/navbar/Navbar'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux';
import ceo from '../../assets/ceo.png'
import boutique from '../../assets/boutique.png'

function About() {
  const cartItems = useSelector((state) => state.cart.data);
  const wishItems = useSelector((state) => state.cart.wishlist);
  return (
    <>
      <Navbar count={cartItems.length} wishCount={wishItems.length} />
      <Navigation page="About us" />
      <div className="heading">
        <span>About Us</span>
      </div>
      <div className="about">
        <div className="container">
          <div className="aboutWrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="mission">
                  <h2>Our Mission</h2>
                  <p>
                    At our fashion online store, our mission is to provide our customers with a seamless shopping experience that is both easy and enjoyable. We are committed to offering the latest fashion trends, high-quality products, and exceptional customer service.                    </p>
                  <p>
                    We believe that fashion is a form of self-expression and that everyone should have access to stylish and affordable clothing. That’s why we strive to offer a diverse range of products that cater to all styles, sizes, and budgets.                    </p>
                  <p>
                    As a responsible fashion retailer, we are also committed to sustainable and ethical practices. We work with brands that share our values and are dedicated to reducing their environmental impact and promoting fair labor practices.                    </p>
                  <p>
                    Our mission is to not only provide our customers with stylish and affordable fashion but to also make a positive impact on the world around us. We hope to inspire our customers to express themselves through fashion while making conscious choices that benefit both themselves and the planet.                    </p>
                  <p>
                    We believe that fashion is a form of self-expression and that everyone should have access to stylish and affordable clothing. That’s why we strive to offer a diverse range of products that cater to all styles, sizes, and budgets.                    </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ceoImage">
                  <img src={ceo} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="ceoImage boutique">
                  <img src={boutique} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mission boutique right">
                  <h2>Our Boutique</h2>
                  <p>
                    Our fashion boutique, where we offer a carefully curated selection of fashion items to help you create your own unique style. Our boutique is designed to cater to fashion-forward individuals who are looking for high-quality clothing and accessories that stand out from the crowd.                  </p>
                  <p>
                    At our boutique, we believe that fashion is an art form and that everyone deserves to express themselves through their clothing. That’s why we offer a diverse range of products that cater to all styles, from chic and classic to edgy and bold.                  </p>
                  <p>
                    We are passionate about fashion and are dedicated to providing our customers with a personalized shopping experience. Our team of fashion experts is always on hand to offer styling advice and help you find the perfect pieces to elevate your wardrobe.                  </p>
                  <p>
                    As a boutique, we also value the importance of sustainability and ethical practices in the fashion industry. We are committed to working with brands that share our values and prioritize ethical production and sustainable materials.                  </p>
                  <p>
                    At our boutique, we believe that fashion is an art form and that everyone deserves to express themselves through their clothing. That’s why we offer a diverse range of products that cater to all styles, from chic and classic to edgy and bold.                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="row">
              <div className="col-md-4">
                <div className="oneItem">
                <i className="fa fa-truck" aria-hidden="true"></i>
                <span>free and Fast shipping</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="oneItem">
                <i>%</i>
                <span>EVERY FRIDAY BIG DISCOUNTS</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="oneItem">
                <i className="fa fa-comments-o" aria-hidden="true"></i>
                <span>24/7 ONLINE SUPPORT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default About