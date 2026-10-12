
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Footer from './component/Footer';
import Home from './pages/Home';
import './component/Header.css';
import './component/Footer.css';
import './pages/Home.css';
import Menu from './pages/Menu';
import './pages/Menu.css';
import Customization from './pages/Customization';
import './pages/Customization.css';
import Order from './pages/Order';
import './pages/Order.css';
import About from './pages/About';
import Cartpage from './pages/Cartpage';
import "./pages/Cartpage.css";
import './pages/About.css';
import Wishlist from './pages/Wishlist';
import './pages/Wishlist.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
