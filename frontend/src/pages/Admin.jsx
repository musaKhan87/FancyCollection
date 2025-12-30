import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Upload,
  Palette,
  MessageSquare,
  Home,
  LogOut,
  Search,
  Eye,
} from "lucide-react";
import axios from "axios";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [stock, setStock] = useState("");
const [category, setCategory] = useState("");


    const handleImageUpload = (e) => {
      const file = e.target.files[0];

      if (!file) return;

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Only image files allowed");
        return;
      }

      // Validate size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be under 5MB");
        return;
      }

      setImage(file);
      setPreview(URL.createObjectURL(file));
    };


  const [showAddModal, setShowAddModal] = useState(false);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);
    
    const handleAddProduct = async () => {
      try {
        if (!name || !price || !image) {
          alert("Please fill all required fields");
          return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("pricePerMeter", price);
        formData.append("stock", stock);
        formData.append("category", category);
        formData.append("image", image);

        const res = await axios.post(
          "http://localhost:5000/api/products",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setProducts((prev) => [res.data, ...prev]);

        setShowAddModal(false);
        setName("");
        setPrice("");
        setStock("");
        setCategory("");
        setImage(null);
        setPreview(null);
      } catch (error) {
        alert("Failed to add product");
        console.error(error);
      }
    };

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this product?"))
        return;

      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);

        setProducts((prev) => prev.filter((p) => p._id !== id));
      } catch (error) {
        console.error("Delete failed", error);
        alert("Failed to delete product");
      }
    };


  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = [{ id: "products", label: "Products", icon: Package }];

    
  return (
    <div className="min-h-screen bg-theme-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-theme-surface border-r border-theme-border p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="font-display text-xl font-bold text-theme-heading">
            Admin Panel
          </h1>
          <p className="text-sm text-theme-text/60">Fancy Collection NX</p>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === tab.id
                  ? "bg-theme-button text-theme-button-text"
                  : "text-theme-text hover:bg-theme-background"
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 space-y-2 border-t border-theme-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-theme-text hover:bg-theme-background transition-all"
          >
            <Home size={20} />
            View Site
          </Link>
          <Link
            to="/admin"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-theme-text hover:bg-theme-background transition-all"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-theme-surface border-b border-theme-border p-4 z-50">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-lg font-bold text-theme-heading">
            Admin
          </h1>
          <Link to="/" className="text-theme-accent">
            <Home size={20} />
          </Link>
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-theme-button text-theme-button-text"
                  : "bg-theme-background text-theme-text border border-theme-border"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 mt-28 md:mt-0 overflow-auto">
        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-theme-heading">
                  Products
                </h2>
                <p className="text-theme-text/60">
                  {products.length} total products
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-theme-button text-theme-button-text rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Plus size={18} />
                Add Product
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text/40"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-theme-surface border border-theme-border rounded-lg text-theme-text placeholder:text-theme-text/40 focus:outline-none focus:border-theme-accent"
              />
            </div>

            {/* Products Table */}
            <div className="bg-theme-surface rounded-xl border border-theme-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-theme-border">
                      <th className="text-left p-4 font-medium text-theme-heading">
                        Product
                      </th>

                      <th className="text-left p-4 font-medium text-theme-heading">
                        Price
                      </th>
                      <th className="text-left p-4 font-medium text-theme-heading hidden lg:table-cell">
                        Stock
                      </th>
                      <th className="text-right p-4 font-medium text-theme-heading">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b border-theme-border/50 last:border-0 hover:bg-theme-background/50"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-theme-heading">
                                {product.name}
                              </p>
                              <p className="text-sm text-theme-text/60">
                                {product.type}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-4 font-medium text-theme-accent">
                          ₹{product.pricePerMeter}/m
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              product.stock > 50
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {product.stock} m
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/product/${product._id}`}
                              className="p-2 hover:bg-theme-background rounded-lg text-theme-text/60 hover:text-theme-accent transition-colors"
                            >
                              <Eye size={18} />
                            </Link>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="p-2 hover:bg-theme-background rounded-lg text-theme-text/60 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-theme-background rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="font-display text-xl font-bold text-theme-heading mb-6">
              Add New Product
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-theme-heading mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Premium Cotton Lawn"
                  className="w-full px-4 py-2.5 bg-theme-surface border border-theme-border rounded-lg text-theme-text placeholder:text-theme-text/40"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-heading mb-1">
                    Price/meter (₹)
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="299"
                    className="w-full px-4 py-2.5 bg-theme-surface border border-theme-border rounded-lg text-theme-text placeholder:text-theme-text/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-theme-heading mb-1">
                  Category
                </label>
                <input
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="category"
                  className="w-full px-4 py-2.5 bg-theme-surface border border-theme-border rounded-lg text-theme-text placeholder:text-theme-text/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-theme-heading mb-1">
                  Product Image
                </label>

                <input
                  type="file"
                  id="productImage"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />

                <label
                  htmlFor="productImage"
                  className="border-2 border-dashed border-theme-border rounded-lg p-6 text-center hover:border-theme-accent transition-colors cursor-pointer flex flex-col items-center justify-center"
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-lg shadow"
                    />
                  ) : (
                    <>
                      <Upload size={32} className="text-theme-text/40 mb-2" />
                      <p className="text-sm text-theme-text/60">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-theme-text/40 mt-1">
                        PNG, JPG up to 5MB
                      </p>
                    </>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-heading mb-1">
                    Stock (meters)
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="100"
                    className="w-full px-4 py-2.5 bg-theme-surface border border-theme-border rounded-lg text-theme-text placeholder:text-theme-text/40"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2.5 border border-theme-border text-theme-text rounded-lg hover:bg-theme-surface transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="flex-1 py-2.5 bg-theme-button text-theme-button-text rounded-lg hover:opacity-90 transition-opacity"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
