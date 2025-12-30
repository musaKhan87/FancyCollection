import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/layout/ProductCard";
import Footer from "../components/layout/Footer";
import { Search } from "lucide-react";
import { Input } from "../components/UI/Input";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://fancycollection-backend-76ju.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  // 🔍 Search logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const query = searchTerm.toLowerCase();

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }, [products, searchTerm]);

  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold text-theme-heading">
              Our Catalog
            </h1>
            <p className="mt-2 text-theme-text/70">
              Browse our complete collection of premium fabrics
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* 🔍 Search Box */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, code or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-theme-text/60">No products found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
