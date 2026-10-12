import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  calculateTotal,
} from "../redux/Cartslice";
import "./Cartpage.css";

const CartPage = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="cart-page">

      <h2 className="cart-heading">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          alt="Cart"
          className="cart-heading-icon"
        />
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty 🧁</h3>
          <p>Sweet treats are waiting for you!</p>
        </div>
      ) : (
        <>
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="cart-product-img"
                      />
                    </td>

                    <td className="cart-product-name">
                      {item.title}
                    </td>

                    <td>₹{item.price}</td>

                    <td>
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                change: -1,
                              })
                            )
                          }
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          className="quantity-btn"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                change: 1,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      ₹{item.price * item.quantity}
                    </td>

                    <td>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                      >
                        ✕ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-summary">
            <p>Sweetness delivered with love ♡</p>
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;