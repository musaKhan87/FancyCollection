
import { Award, Users, Truck, Heart } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-theme-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-theme-heading">
              About Us
            </h1>
            <p className="mt-4 text-xl text-theme-text/70 italic">
              "Varieties in Cloth Materials"
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg">
              <h2 className="font-display text-3xl font-bold text-theme-heading mb-6">
                Our Story
              </h2>
              <p className="text-theme-text/80 leading-relaxed mb-6">
                Based in the heart of Mumbai's historic textile district –
                Pydhonie,
                <strong className="text-theme-heading">
                  {" "}
                  Fancy Collection NX
                </strong>{" "}
                has been serving the fabric needs of retailers, boutiques, and
                individual customers for decades.
              </p>
              <p className="text-theme-text/80 leading-relaxed mb-6">
                What started as a small fabric trading business has grown into a
                trusted name in the textile industry. We take pride in offering
                an extensive collection of premium fabrics – from everyday
                cotton to luxurious silks, from vibrant prints to elegant
                designer materials.
              </p>
              <p className="text-theme-text/80 leading-relaxed">
                Our commitment to quality, fair pricing, and excellent customer
                service has earned us loyal customers across India. Whether
                you're a retailer looking for wholesale deals or an individual
                seeking that perfect fabric for a special occasion, we're here
                to serve you.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-theme-heading text-center mb-12">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  description:
                    "Every fabric is hand-selected to meet our high standards.",
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description: "Your satisfaction is our top priority, always.",
                },
                {
                  icon: Truck,
                  title: "Reliable Delivery",
                  description: "Fast, secure shipping across India.",
                },
                {
                  icon: Heart,
                  title: "Fair Pricing",
                  description: "Best prices for both retail and wholesale.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-theme-background rounded-xl border border-theme-border text-center"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-theme-accent/10 rounded-full mb-4">
                    <value.icon size={24} className="text-theme-accent" />
                  </div>
                  <h3 className="font-semibold text-theme-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-theme-text/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-theme-heading mb-6">
              Visit Our Store
            </h2>
            <p className="text-theme-text/80 mb-8">
              Experience our fabric collection in person at our store in
              Pydhonie, Mumbai.
            </p>
            <div className="inline-block p-8 bg-theme-surface rounded-2xl border border-theme-border">
              <p className="text-lg font-medium text-theme-heading">
                343, Ebrahim Rehmatullah Road
              </p>
              <p className="text-theme-text/80">Ali Jalal Building, Pydhonie</p>
              <p className="text-theme-text/80">Mumbai - 400 003</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
