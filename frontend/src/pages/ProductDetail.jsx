import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Package,
  Ruler,
  Shirt,
  Droplets,
  Check,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProductDetail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]); // ✅ correct

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // ✅ correct function
  }, []);
  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-theme-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-theme-heading">
            Product not found
          </h1>
          <Link to="/catalog" className="mt-4 inline-block text-theme-accent">
            Back to Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Fancy Collection NX, I want to order ${product.name} – Code ${product.code} – Quantity [ ]`
  );

  const whatsappLink = `https://wa.me/917045843342?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-theme-text/70 hover:text-theme-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square bg-theme-surface rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-theme-surface text-theme-accent text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-theme-heading">
                {product.name}
              </h1>


              <p className="mt-4 text-theme-text/80 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-theme-accent">
                  ₹{product.pricePerMeter}
                </span>
                <span className="text-lg text-theme-text/60">per meter</span>
              </div>


              {/* Stock */}
              <div className="mt-6 flex items-center gap-2">
                <Check size={18} className="text-green-600" />
                <span className="text-sm text-theme-text/80">
                  {product.stock > 0
                    ? `In Stock (${product.stock} meters available)`
                    : "Out of Stock"}
                </span>
              </div>

              {/* WhatsApp Order */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-theme-button text-theme-button-text rounded-full text-lg font-medium hover:opacity-90 transition-all"
              >
                <MessageCircle size={22} />
                Order on WhatsApp
              </a>

              <p className="mt-4 text-center text-sm text-theme-text/60">
                Message format: "Hello Fancy Collection NX, I want to order{" "}
                {product.name} – Code {product.code} – Quantity [ ]"
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
