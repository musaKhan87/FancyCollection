import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const ProductCard = ({ product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Fancy Collection, I want to order ${product.name} – Code ${product.code} – Quantity [ ]`
  );

  const whatsappLink = `https://wa.me/917045843342?text=${whatsappMessage}`;

  return (
    <div className="group bg-theme-background rounded-xl overflow-hidden border border-theme-border hover:shadow-elegant transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-theme-surface">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white text-theme-accent text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-theme-heading line-clamp-1">
          {product.name}
        </h3>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-theme-accent">
            ₹{product.pricePerMeter}
          </span>
          <span className="text-sm text-theme-text/60">/meter</span>
        </div>
      
        <div className="mt-4 flex gap-3">
          <Link
            to={`/product/${product._id}`}
            className="flex-1 text-center py-2.5 border border-theme-border text-theme-text text-sm font-medium rounded-lg hover:bg-theme-surface transition-colors"
          >
            View Details
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-theme-button text-theme-button-text rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
