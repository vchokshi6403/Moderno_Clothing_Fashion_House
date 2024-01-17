import React from "react";
import Cart from "./components/cart/Cart";
import {Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CheckOut from "./components/checkout/CheckOut";
import Wishlist from "./components/wishlist/Wishlist";
import ItemDetailPage from "./components/itemdetailpage/ItemDetailPage";
import About from "./components/about_us/About";
import BackToTop from "./components/backtotop/BackToTop";
import Contact from "./components/contact/Contact";
import Order from "./components/order/Order";
import Shop from "./components/shop/Shop";
import ShopCategory from "./components/shop/ShopCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/product/:id" element={<ItemDetailPage/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/order-received" element={<Order/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:category" element={<ShopCategory/>}/>
        </Routes>
        <BackToTop/>
      </BrowserRouter>
    </div>
  );
}

export default App;
