import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import ProductDetail from "./components/productDetail";
import Product from './components/product';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  function getProductDetail (e) {
    console.log(e.target)
      console.log("on click worked")
  };
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col" onClick={getProductDetail}>
          <Product />
        </div>
        <div className="col-1">
        </div>
      </div>
      <div className="row">
        <Footer/>
      </div>
      {/* <Routes>
          <Route exact path="product" element={<Product />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:id" element={<ProductDetail />} /> */}
          {/* <Route exact path="/about" component={About} />
                <Route exact path="/listing" component={Listing} />
                <Route exact path="/listing/:id" component={ListingDetail} />
                <Route exact path="/listing/:id/buy" component={Buy} />
                <Route exact path="/brought/:id/" component={Brought} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route component={NotFound} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
