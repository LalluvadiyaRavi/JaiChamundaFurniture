import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useEffect,useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import FloatingWhatsApp from "./components/FloatingWhatsApp";

import BackToTop from "./components/BackToTop";
import BottomCTA from "./components/BottomCTA";
import QuoteForm from "./components/QuoteForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{

  setTimeout(()=>{

  setLoading(false);

  },2000);

  },[]);
  if(loading){
  return <Loader />;
  }
  return (
    <HashRouter>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FloatingWhatsApp/>
      
      <BackToTop/>
      <BottomCTA onQuoteClick={() => setShowForm(true)}/>
      <QuoteForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        productName="General Inquiry"
      />
    </HashRouter>
  );
}

export default App;