import React, { useEffect } from 'react';
import './itemDetailPage.css'
import { addtowishlist, removeWishlistId, addToCart } from '../../app/cartSlice';
import { Link } from 'react-router-dom';
import { products } from '../../dummyData';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { useSelector, useDispatch } from 'react-redux';

function ItemDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.data)
  const wishItems = useSelector((state) => state.cart.wishlist)
  const facebookUrl = 'https://www.facebook.com'
  const twitterUrl = 'https://www.twitter.com'
  const pinterestUrl = 'https://www.pinterest.com'
  const whatsappUrl = 'https://www.whatsapp.com'
  console.log('Wishlist:', wishItems);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find(item => item.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }


  const isInWishlist = wishItems.some((item => item.id === product.id))

  const addtowishlistdata = () => {
    dispatch(addtowishlist(product));
    console.log('Adding to wishlist using id:', product.id);
    // setIsInWishlist(true);
  }

  const removeWishlist = () => {
    dispatch(removeWishlistId(product));
    console.log('Removing from wishlist using id:', product.id);
    // setIsInWishlist(false);
  };

  const addItemToCart = () => {
    dispatch(addToCart(product))
    console.log("Added from ItemdetailPage To cart", product.id)
  }


  return (
    <>
      <Navbar count={cartItems.length} wishCount={wishItems.length} />
      <Navigation page={product.title} />
      <div className="itemPage">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="itemImage">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="itemDetailsDesc">
                <div className="brandImage">
                  <img src={product.brand_Image} alt="" />
                </div>
                <div className="productDescription">
                  <div className="title">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="price">
                    {product.discount > 0 ?
                      <div className="discount">
                        <span> -{product.discount}%</span>
                      </div> : <div></div>
                    }

                    <div className="discountPrice">
                      <span>
                        ${(product.price).toFixed(2)}
                      </span>
                    </div>
                    {product.o_price > 0 ?
                      <div className="originalPrice">
                        <span>     ${(product.o_price).toFixed(2)}</span>
                      </div> : <div></div>
                    }

                  </div>
                  <div className="overview">
                    <span>{product.overview}</span>
                  </div>
                </div>
                {product.stock === "Out of Stock"
                  ?
                  <div className='outofstock'>
                      <span>Out of stock</span>
                  </div> :
                  <div className="amazon">
                    <button onClick={addItemToCart}>Add to cart</button>
                  </div>}

                <div className="productBtns">
                  {isInWishlist ? (
                    <div className="wishlist" onClick={removeWishlist}>
                      <button className="wishlistBtn">
                        <div className="wishlistPath">
                          <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div className="wishlistText">
                          <span>Remove from Wishlist</span>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="wishlist" onClick={addtowishlistdata}>
                      <button className="wishlistBtn">
                        <div className="wishlistPath">
                          <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                        <div className="wishlistText">
                          <span>Add to Wishlist</span>
                        </div>
                      </button>
                    </div>
                  )}
                  <div className="wishlist share">
                    <button className="wishlistBtn" >
                      <div className="wishlistPath">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <div className="wishlistText">
                        <span>Share</span>
                        <div className="social">
                          <ul className='socialList'>
                            <li className='socialitem'>
                              <Link to={facebookUrl} target='_blank'>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                              </Link>
                            </li>
                            <li className='socialitem'>
                              <Link to={twitterUrl} target='_blank'>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                              </Link>
                            </li>
                            <li className='socialitem'>
                              <Link to={pinterestUrl} target='_blank'>
                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                              </Link>

                            </li>
                            <li className='socialitem'>
                              <Link to={whatsappUrl} target='_blank'>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </button>
                  </div>
                </div>
                <div className="DeatiledDescription">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Description
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Additional information
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <p>Rating : <i class="fa fa-star" aria-hidden="true" style={{color:'goldenrod'}}></i> {product.rating.rate}</p>

                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Reviews(0)
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <p>There are no reviews yet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default ItemDetailPage;
