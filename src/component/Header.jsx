
import React from 'react' 
import { useSelector } from "react-redux"; 
import { Link } from 'react-router-dom' 
import littlecremepot from '../images/littlecremepotlogo.png';
 
const Header = () => { 
 
  const cartItems = useSelector((state) => state.cart.cartItems); 
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
 
  return ( 
      
        <>  
            <marquee className="marquee" width="100%" direction="right" height="50px" scrollamount="15">  
                freebies for first order 
            </marquee>  
  
            <div className="navbar">  
  
                <div className="icon">
                    <img src={littlecremepot}
                    alt="logo"
                    height="100px"
                    with="100px"
                    />  
                </div>  
  
                <div className="nav">  
                      
                    <ul>  
                        <li>  
                            <Link to="/">home</Link>  
                            </li>  
                        <li><Link to="/menu">menu</Link></li>  
                        <li><Link to="/customization">customization</Link></li>  
                        <li><Link to="/order">order</Link></li>  
                        <li><Link to="/about">about</Link></li>  
 
                        <li> 
                          <Link to="/cartpage"> 
                             Cartpage 
                            <span className="cart-count"> 
                              {cartItems.length} 
                            </span> 
                          </Link> 
                        </li>  

                        <li>
                          <Link to="/wishlist">
                            Wishlist
                            <span className="cart-count">
                              {wishlistItems.length}
                            </span>
                          </Link>
                        </li>
  
                    </ul>  
                </div>  
  
            </div>  
        </>  
  )  
}  
  
export default Header
