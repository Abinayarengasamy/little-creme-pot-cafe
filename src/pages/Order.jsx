
import React from 'react';
import cakebg from "../images/cakeggg.png";
import applepie from "../images/applepie.png";
import tresleches from "../images/tresleches.png";
import boba from "../images/boba.png";
import shake from "../images/shake.png";
import panacotta from "../images/panacotta.png";
import pudding from "../images/pudding.png";

import { orderdata, orderdatas, orderdatasss } from "../component/data/Aboutdata";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/Cartslice';
import { addToWishlist, removeFromWishlist } from "../redux/WishlistSlice";


const Order = () => {
   const cartProducts = useSelector((state) => state.cart.cartItems);
   const wishlistProducts = useSelector((state) => state.wishlist.wishlistItems);

   const dispatch = useDispatch();

   const addCart = (item) => {
       dispatch(addToCart(item));
   };

   const deleteCart = (item) => {
       dispatch(removeFromCart(item.id));
   };

   const addWishlist = (item) => {
       dispatch(addToWishlist(item));
   };

   const deleteWishlist = (item) => {
       dispatch(removeFromWishlist(item.id));
   };

  return (
    <div>

      <div className="background">
        <img
          src={cakebg}
          alt="bg"
          height="500"
          width="100%"
        />
      </div>

      <div className="order-details-tag">
        <h1>order details</h1>
      </div>

      <div className="order-details">

        {orderdata && orderdata.map((item) => (

          <div className="details" key={item.id} id={item.id}>

            <img
              src={item.img}
              width="300px"
              height="300px"
              alt={item.title}
            />

            <h5 className="order-title">{item.title}</h5>

            <small className="text-muted">{item.price}</small>
            <br />

           {cartProducts.find(Items => Items.id === item.id) ? (
              <button onClick={() => { deleteCart(item) }}>
                Remove from Cart
              </button>
           ) : (
              <button onClick={() => { addCart(item) }}>
                Add to Cart
              </button>
           )}

           {wishlistProducts.find(product => product.id === item.id) ? (
              <button onClick={() => { deleteWishlist(item) }}>
                ♥ Remove from Wishlist
              </button>
           ) : (
              <button onClick={() => { addWishlist(item) }}>
                ♡ Add to Wishlist
              </button>
           )}

          </div>

        ))}

      </div>


      <div className="order-details">

        {orderdatas && orderdatas.map((item) => (

          <div className="details" key={item.id} id={item.id}>

            <img
              src={item.img}
              width="300px"
              height="300px"
              alt={item.title}
            />

            <h5 className="order-title">{item.title}</h5>

            <small className="text-muted">{item.price}</small>
            <br />

            {cartProducts.find(Items => Items.id === item.id) ? (
              <button onClick={() => { deleteCart(item) }}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => { addCart(item) }}>
                Add to Cart
              </button>
            )}

            {wishlistProducts.find(product => product.id === item.id) ? (
              <button onClick={() => { deleteWishlist(item) }}>
                ♥ Remove from Wishlist
              </button>
            ) : (
              <button onClick={() => { addWishlist(item) }}>
                ♡ Add to Wishlist
              </button>
            )}

          </div>

        ))}

      </div>


      <div className="order-details">

        {orderdatasss && orderdatasss.map((item) => (

          <div className="details" key={item.id} id={item.id}>

            <img
              src={item.img}
              width="300px"
              height="300px"
              alt={item.title}
            />

            <h5 className="order-title">{item.title}</h5>

            <small className="text-muted">{item.price}</small>
            <br />

           {cartProducts.find(Items => Items.id === item.id) ? (
              <button onClick={() => { deleteCart(item) }}>
                Remove from Cart
              </button>
           ) : (
              <button onClick={() => { addCart(item) }}>
                Add to Cart
              </button>
           )}

           {wishlistProducts.find(product => product.id === item.id) ? (
              <button onClick={() => { deleteWishlist(item) }}>
                ♥ Remove from Wishlist
              </button>
           ) : (
              <button onClick={() => { addWishlist(item) }}>
                ♡ Add to Wishlist
              </button>
           )}

          </div>

        ))}

      </div>

    </div>
  );
};

export default Order;
