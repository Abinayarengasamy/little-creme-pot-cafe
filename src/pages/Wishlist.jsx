
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import { addToCart } from "../redux/Cartslice";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-page">

      <h2 className="wishlist-heading">
        <span>♡</span> My Wishlist
      </h2>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <h3>Your wishlist is empty ♡</h3>
          <p>Save your favourite sweet treats here!</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>

              <img
                src={item.img}
                alt={item.title || item.name}
                className="wishlist-img"
              />

              <div className="wishlist-details">
                <h3>{item.title || item.name}</h3>

                <p className="wishlist-price">
                  ₹{item.price}
                </p>

                <div className="wishlist-buttons">

                  <button
                    className="wishlist-cart-btn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    className="wishlist-remove-btn"
                    onClick={() =>
                      dispatch(removeFromWishlist(item.id))
                    }
                  >
                    ♡ Remove
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Wishlist;
