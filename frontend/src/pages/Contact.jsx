
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Clock,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Contact = () => {
  const whatsappLink =
    "https://wa.me/917045843342?text=Hello%20Fancy%20Collection%20NX%2C%20I%20have%20an%20inquiry.";

  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-theme-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-theme-heading">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-theme-text/70">
              We'd love to hear from you. Reach out for inquiries and orders.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-theme-heading mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-theme-surface rounded-xl border border-theme-border">
                    <div className="w-12 h-12 flex items-center justify-center bg-theme-accent/10 rounded-full flex-shrink-0">
                      <MapPin size={22} className="text-theme-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-heading mb-1">
                        Address
                      </h3>
                      <p className="text-theme-text/80">
                        343, Ebrahim Rehmatullah Road,
                        <br />
                        Ali Jalal Building, Pydhonie,
                        <br />
                        Mumbai - 400 003
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-theme-surface rounded-xl border border-theme-border">
                    <div className="w-12 h-12 flex items-center justify-center bg-theme-accent/10 rounded-full flex-shrink-0">
                      <Phone size={22} className="text-theme-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-heading mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+917045843342"
                        className="text-theme-text/80 hover:text-theme-accent"
                      >
                        +91 70458 43342
                      </a>
                      <br />
                      <a
                        href="tel:+919892404353"
                        className="text-theme-text/80 hover:text-theme-accent"
                      >
                        +91 98924 04353
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-theme-surface rounded-xl border border-theme-border">
                    <div className="w-12 h-12 flex items-center justify-center bg-theme-accent/10 rounded-full flex-shrink-0">
                      <Instagram size={22} className="text-theme-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-heading mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/Fancyyclothes343"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-text/80 hover:text-theme-accent"
                      >
                        @Fancyyclothes343
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-theme-surface rounded-xl border border-theme-border">
                    <div className="w-12 h-12 flex items-center justify-center bg-theme-accent/10 rounded-full flex-shrink-0">
                      <Clock size={22} className="text-theme-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-heading mb-1">
                        Business Hours
                      </h3>
                      <p className="text-theme-text/80">
                        Monday - Saturday: 10:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-theme-button text-theme-button-text rounded-full text-lg font-medium hover:opacity-90 transition-all"
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <div>
                <h2 className="font-display text-2xl font-bold text-theme-heading mb-8">
                  Find Us
                </h2>
                <div className="aspect-square md:aspect-[4/3] bg-theme-surface rounded-2xl overflow-hidden border border-theme-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4534040111303!2d72.83221220682539!3d18.955573242672585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3cc0f485af%3A0x5177870e30084d47!2sFancy%20Collections!5e0!3m2!1sen!2sin!4v1767104545795!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
