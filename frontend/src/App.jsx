import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Catalog from "./pages/Catalog";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import InstallApp from "./components/layout/InstallApp";
import ScrollToTop from "./components/layout/ScrollTop";


function App() {

  return (
    <>
      <InstallApp />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
