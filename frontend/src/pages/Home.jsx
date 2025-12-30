import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/layout/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);   // ✅ correct

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();     // ✅ correct function
  }, []);

  const featuredProducts = products.slice(0, 4);   // safe because products = []

  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="pt-20">
        <HeroSection />

        {/* Featured Products */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-theme-heading">
                  Featured Fabrics
                </h2>
                <p className="mt-3 text-theme-text/70">
                  Handpicked selections from our collection
                </p>
              </div>
              <Link
                to="/catalog"
                className="hidden md:inline-flex items-center gap-2 text-theme-accent font-medium hover:gap-3 transition-all"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 text-theme-accent font-medium"
              >
                View All Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-theme-heading">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Quality",
                  description:
                    "Hand-selected fabrics from trusted mills across India. Quality assured on every meter.",
                  icon: "✨",
                },
                {
                  title: "Wholesale Prices",
                  description:
                    "Best prices for bulk orders. Special discounts for retailers and boutiques.",
                  icon: "💰",
                },
                {
                  title: "PAN India Delivery",
                  description:
                    "Free shipping on orders above ₹1999. Fast and reliable delivery across India.",
                  icon: "🚚",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 bg-theme-background rounded-xl border border-theme-border text-center hover:shadow-elegant transition-shadow"
                >
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="mt-4 text-xl font-semibold text-theme-heading">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-theme-text/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-theme-accent/5" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-theme-heading">
              Ready to Order?
            </h2>
            <p className="mt-4 text-lg text-theme-text/70">
              Contact us on WhatsApp for quick inquiries and orders.
            </p>
            <a
              href="https://wa.me/917045843342?text=Hello%20Fancy%20Collection%20NX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-theme-button text-theme-button-text rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
