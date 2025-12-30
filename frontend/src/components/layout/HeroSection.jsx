import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/917045843342?text=Hello%20Fancy%20Collection%20NX%2C%20I%20would%20like%20to%20place%20an%20order.";

  /* ================= BACKGROUND SLIDER ================= */
  const heroImages = ["/hero2.jpeg", "/hero.jpeg", "/hero1.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  const getServer = async () => {
    const response = await axios.get(
      "https://fancycollection-backend-76ju.onrender.com/api/products/get"
    );
  };

  useEffect(() => {
    getServer();
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ================= SMOOTH TYPING EFFECT ================= */
  const texts = ["Premium Fabrics for Retail", "Fancy Collection"];

  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    // smoother speeds
    const typingSpeed = 140;
    const deletingSpeed = 80;
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // smooth pause before deleting
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[0vh] flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-theme-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-surface rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 w-full pb-4">
        <div className="relative text-center overflow-hidden">
          {/* Background Slider */}
          {heroImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url("${img}")` }}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 py-20 px-6">
            {/* Smooth Typing Heading */}
            <h1 className="font-display text-2xl sm:text-4xl md:text-7xl font-bold text-white leading-tight">
              <span className="inline-block transition-all duration-500 ease-out translate-y-0 opacity-100">
                {typedText}
              </span>
              <span className="ml-1 animate-[blink_1.2s_infinite]">|</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Discover our exquisite collection of Cotton, Silk, Rayon,
              Polyester, and Designer fabrics. Quality you can trust, prices
              you'll love.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-theme-button-text rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle size={22} />
                Order on WhatsApp
              </a>

              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all"
              >
                Browse Catalog
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-600">
          {[
            { value: "30+", label: "Years Experience" },
            { value: "500+", label: "Fabric Varieties" },
            { value: "10K+", label: "Happy Customers" },
            { value: "PAN", label: "India Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-theme-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-theme-text/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor blink animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
