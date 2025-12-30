import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-theme-surface border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-theme-heading">
              Fancy Collection NX
            </h3>
            <p className="mt-2 text-sm text-theme-text/80 italic">
              "Varieties in Cloth Materials"
            </p>
            <p className="mt-4 text-sm text-theme-text/70 leading-relaxed">
              Premium fabric wholesaler & retailer based in Mumbai since
              decades. Quality fabrics for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-theme-heading mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-theme-text/80 hover:text-theme-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-sm text-theme-text/80 hover:text-theme-accent transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-theme-text/80 hover:text-theme-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-theme-text/80 hover:text-theme-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-theme-heading mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-theme-text/80">Cotton</li>
              <li className="text-sm text-theme-text/80">Silk</li>
              <li className="text-sm text-theme-text/80">Rayon</li>
              <li className="text-sm text-theme-text/80">Polyester</li>
              <li className="text-sm text-theme-text/80">Designer</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-theme-heading mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-theme-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-theme-text/80">
                  343, Ebrahim Rehmatullah Road,
                  <br />
                  Ali Jalal Building, Pydhonie,
                  <br />
                  Mumbai - 400 003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-theme-accent" />
                <a
                  href="tel:+917045843342"
                  className="text-sm text-theme-text/80 hover:text-theme-accent"
                >
                  +91 70458 43342
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-theme-accent" />
                <a
                  href="https://instagram.com/Fancyyclothes343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-text/80 hover:text-theme-accent"
                >
                  @Fancyyclothes343
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-theme-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-theme-text/60">
            © {new Date().getFullYear()} Fancy Collection NX. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917045843342"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-theme-button/10 text-theme-accent hover:bg-theme-button/20 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com/Fancyyclothes343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-theme-button/10 text-theme-accent hover:bg-theme-button/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
