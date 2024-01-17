import React, { useEffect, useState } from 'react'
import { products } from '../../dummyData'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addtowishlist, removeFromWishlist } from '../../app/cartSlice'
import Navbar from '../navbar/Navbar'
import bg1 from '../../assets/bg1.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import asterick from '../../assets/asterick.svg'
import women from '../../assets/women.jpg'
import men from '../../assets/men.jpg'
import jewellery from '../../assets/jwellery.jpg'
import accessories from '../../assets/accessories.jpg'
import prada from '../../assets/prada.png'
import burberry from '../../assets/burberry.png'
import dg from '../../assets/DG.png'
import hb from '../../assets/HB.webp'
import lafayette from '../../assets/Lafayette.png'
import './home.css'
import { useNavigate, } from 'react-router-dom'
import Footer from '../footer/Footer'
// import BackToTop from '../backtotop/BackToTop'


function Home() {
    const wishlistItems = useSelector(state => state.cart.wishlist)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [wishCount, setWishCount] = useState(0)
    // eslint-disable-next-line
    const addtowishlistdata = (dataId) => {
        const selectedItem = products.find((data) => data.id === dataId);

        if (wishlistItems.find((item) => item.id === dataId)) {
            // If the item is already in the wishlist, remove it
            dispatch(removeFromWishlist(dataId));
        } else {
            // If the item is not in the wishlist, add it
            dispatch(addtowishlist(selectedItem));
        }

        setWishCount(wishlistItems.length); // Update the wishlist count
    };

    // eslint-disable-next-line
    const addItem = (itemId) => {
        dispatch(addToCart(products.find(item => item.id === itemId)))
        setCount(count + 1)
        // navigate('/cart')
    }
    // eslint-disable-next-line
    const [selectsize, setSelectSize] = useState("")
    // eslint-disable-next-line
    const [filteredData, setFilteredData] = useState(products)

    const [selectedCategory, setSelectedCategory] = useState("all");


    const filterProducts = () => {
        let filtered;

        if (selectsize) {
            // Filter by both category and size
            filtered = products.filter((item) => item.category === selectedCategory && item.size === selectsize);
        } else {
            // Filter only by category
            switch (selectedCategory) {
                case "all":
                    filtered = products
                    break;
                case "women":
                    filtered = products.filter((item) => item.category === "women");
                    break;
                case "men":
                    filtered = products.filter((item) => item.category === "men");
                    break;
                case "kids":
                    filtered = products.filter((item) => item.category === "kids");
                    break;
                case "accessories":
                    filtered = products.filter((item) => item.category === "accessories");
                    break;

                default:
                    filtered = products;
            }
        }
        setFilteredData(filtered);
    };
    // eslint-disable-next-line
    const filterBySize = (size) => {
        setSelectSize(size);
        console.log(selectsize)
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // Log or perform any action with the selected category here
        console.log('Selected Category:', category);
    };

    const handleProductClick = (productId) => {
        // Navigate to the product details page
        navigate(`/product/${productId}`);
    };

    const handleProductShop = (productCategory) => {
        navigate(`/shop/${productCategory}`)
    }

    useEffect(() => {
        filterProducts(selectsize);
    }, [selectsize, selectedCategory]);
    return (
        <div>
            <Navbar count={count} wishCount={wishCount} />
            <div className="homepage">
                <div className="homeCover">
                    <div className="container-fluid">
                        <div className="top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="topLeft">
                                        <div className="image">
                                            <img src={bg1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="topRight">
                                        <div className="rightDetails">
                                            <div className="smallImg">
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className="homeTitle">
                                                <div className="container">
                                                    <div className="homeContent">
                                                        <div className="asterickImg">
                                                            <img src={asterick} alt="" />
                                                        </div>
                                                        <div className="text">
                                                            <h2>New Year Collection 2024</h2>
                                                            <p>Introducing the new fashion summer collection, featuring bold and bright colors,
                                                                playful prints, and comfortable yet stylish pieces perfect for any occasion.
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bigImg">
                                                <img src={img2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <BackToTop/> */}
                    <div className="marquee">
                        <div className="marqueeText">
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                            <ul className='movingText'>
                                <li>Free Delivery

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>Money Back Guarantee

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>24 / 7 Support

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <li>High Quality Cotton

                                </li>
                                <i className="fa fa-circle" aria-hidden="true"></i>

                            </ul>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="container-fluid">
                            <div className="row">
                                    <div className="col-md-6">
                                    <div className="filterItems">
                                        <img src={women} alt="" />
                                        <div className="button">
                                            <button className='filter' onClick={() => handleProductShop('women')} >Women</button>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="filterItems">
                                        <img src={men} alt="" />
                                        <div className="button men">
                                            <button className='filter' onClick={() => handleProductShop('men')} >Men</button>
                                        </div>
                                    </div>
                                    </div>
                           
                  <div className="col-md-6">
                                    <div className="filterItems">
                                        <img src={jewellery} alt="" />
                                        <div className="button">
                                            <button className='filter' onClick={() => handleProductShop('kids')} >Jewellery</button>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="filterItems">
                                        <img src={accessories} alt="" />
                                        <div className="button men">
                                            <button className='filter' onClick={() => handleProductShop('accessories')} >Accessories</button>
                                        </div>
                                    </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="brandCover">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="brandImg2">
                                        </div>
                                    </div>
                                    <div className="col-md-2 brandItem">
                                        <div className="brandImg">
                                            <img src={prada} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-2 brandItem">
                                        <div className="brandImg">
                                            <img src={burberry} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-2 brandItem">
                                        <div className="brandImg">
                                            <img src={dg} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-2 brandItem">
                                        <div className="brandImg">
                                            <img src={hb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-2 brandItem">
                                        <div className="brandImg">
                                            <img src={lafayette} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="brandImg2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Sales">
                        <div className="productCover">
                            <div className="salesTitle">
                                <h2>Big Sales</h2>
                            </div>
                            <div className="product">
                                <div className="container">
                                    <div className="category">
                                        {['all', 'women', 'men', 'kids', 'accessories'].map((category) => (
                                            <div
                                                key={category}
                                                onClick={() => handleCategoryClick(category)}>
                                                <button className={`category-item ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ItemCover">
                            <div className="container">
                                <div className="row">
                                    {filteredData.length
                                        ? filteredData.map((item) => (
                                            <div className="col-md-3" key={item.id} >
                                                <div className="singleItem">
                                                    <div className="singleItemDetails">
                                                        <div className="ItemImg">
                                                            <div className="addWishlist">
                                                                <button
                                                                    className={`wishlistBtn ${wishlistItems.find((wishlistItem) => wishlistItem.id === item.id)
                                                                        ? 'active'
                                                                        : ''
                                                                        }`}
                                                                    onClick={() => addtowishlistdata(item.id)}>
                                                                    <div className="wishlistPath">
                                                                        <i
                                                                            className={`fa ${wishlistItems.find((wishlistItem) => wishlistItem.id === item.id)
                                                                                ? 'fa-heart'
                                                                                : 'fa-heart-o'
                                                                                }`}
                                                                            aria-hidden="true"
                                                                        ></i>
                                                                    </div>
                                                                    <div className="wishlistText">
                                                                        <span>
                                                                            {wishlistItems.find((wishlistItem) => wishlistItem.id === item.id)
                                                                                ? 'Remove from Wishlist'
                                                                                : 'Add to Wishlist'}
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                            <img src={item.image} alt="" onClick={() => handleProductClick(item.id)} />
                                                        </div>
                                                        <div className="ItemBottom">
                                                            <div className="itemDetails">
                                                                <div className="brand">
                                                                    <span className='brandspan'>{item.brand}</span>
                                                                </div>
                                                                <div className="itemtitle">
                                                                    <span className='titlespan'>{item.title}</span>
                                                                </div>
                                                                <div className="itemprice">
                                                                    <span className='pricespan'>$ {item.price}</span>
                                                                </div>

                                                            </div>
                                                            <div className="productbtns">
                                                                <div className="cartproduct">
                                                                    <button className='ItemIncart' onClick={() => addItem(item.id)}>Add To Cart</button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <p>No products found</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home