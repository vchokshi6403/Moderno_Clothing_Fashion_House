import React, { useState, useEffect } from 'react'
import './shop.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtowishlist, addToCart } from '../../app/cartSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../../dummyData'
import Navbar from '../navbar/Navbar'
import Navigation from '../../components/navigation/Navigation'
import men from '../../assets/brandImg/men.webp'
import women from '../../assets/brandImg/women.webp'
import kids from '../../assets/brandImg/kids.png'
import accessories from '../../assets/brandImg/accessories.png'
import Footer from '../footer/Footer'

function ShopCategory() {
    const {category} = useParams();
    const cartItems = useSelector((state) => state.cart.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectsize, setSelectSize] = useState("")
    const [filteredData, setFilteredData] = useState(products)


    const product = products.find(item => item.category === category)
    console.log(product.category)

    const [selectedCategory, setSelectedCategory] = useState(product.category);


    const addItem = (itemId) => {
        dispatch(addToCart(products.find(item => item.id === itemId)))
    }

    const addtowishlistdata = (dataId) => {
        dispatch(addtowishlist(products.find(data => data.id === dataId)))
    }


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

    


    const handleCategoryClick = () => {
        setSelectedCategory(product.category);
        // Log or perform any action with the selected category here
        console.log('Selected Category:', product.category);
    };


    const handleProductClick = (productId) => {
        // Navigate to the product details page
        navigate(`/product/${productId}`);
    };

  


    useEffect(() => {
        filterProducts(selectsize);
    }, [selectsize, selectedCategory]);
  return (
    <div>
            <Navbar />
            <Navigation page={`Shop-${product.category}`} />
            <div className="product shopCover">
                <div className="container">
                    <div className="heading">
                        <span>{`Shop-${product.category}`}</span>
                    </div>

                </div>
            </div>
            <div className="ItemCover shopItemCover">
                <div className="container">
                    <div className="row">
                        {filteredData.length
                            ? filteredData.map((item) => (
                                <div className="col-md-3" key={item.id} >
                                    <div className="singleItem">
                                        <div className="singleItemDetails">
                                            <div className="ItemImg">
                                                <div className="addWishlist">
                                                    <button className='wishlistBtn' onClick={() => addtowishlistdata(item.id)}>
                                                        <div className="wishlistPath">
                                                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="wishlistText">
                                                            <span>Add to Wishlist</span>
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
            <Footer/>
        </div >
  )
}

export default ShopCategory