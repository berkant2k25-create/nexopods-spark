import { Link } from "react-router-dom";
import { ArrowRight, Headphones, BatteryFull, Fingerprint, Gamepad2, Shield, Truck, RefreshCw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const features = [
  {
    icon: Headphones,
    title: "Active Noise Cancellation",
    description: "Block out the world and immerse yourself in pure sound."
  },
  {
    icon: BatteryFull,
    title: "Long Battery Life",
    description: "Up to 60 hours of playtime. Power that lasts all day."
  },
  {
    icon: Fingerprint,
    title: "Smart Touch Controls",
    description: "Intuitive controls at your fingertips. Tap, swipe, play."
  },
  {
    icon: Gamepad2,
    title: "Gaming Mode",
    description: "Ultra-low 45ms latency for competitive mobile gaming."
  }
];

const trustItems = [
  { icon: Shield, title: "1 Year Warranty", description: "Complete peace of mind" },
  { icon: Truck, title: "Free Shipping", description: "On orders above ₹999" },
  { icon: RefreshCw, title: "7 Day Returns", description: "Easy return policy" }
];

const reviews = [
  { name: "Rahul M.", rating: 5, text: "Best earbuds in this price range! The ANC is incredible.", avatar: "RM" },
  { name: "Priya S.", rating: 5, text: "Crystal clear audio and super comfortable for long sessions.", avatar: "PS" },
  { name: "Arjun K.", rating: 5, text: "Gaming mode is a game changer. No lag at all!", avatar: "AK" }
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_100%_50%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(174_100%_50%/0.1),transparent_50%)]" />
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">New Collection 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Sound That
                <span className="block text-gradient">Moves You</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Premium wireless audio engineered for the modern Indian youth. 
                Experience studio-quality sound at prices that make sense.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button variant="hero" size="xl" className="gap-2">
                    Shop Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="glass" size="xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gradient">50K+</p>
                  <p className="text-muted-foreground text-sm">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-3xl font-bold text-gradient">4.8★</p>
                  <p className="text-muted-foreground text-sm">Average Rating</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-3xl font-bold text-gradient">1 Year</p>
                  <p className="text-muted-foreground text-sm">Warranty</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
                alt="Nexopods Pro"
                className="relative w-full rounded-3xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our bestselling audio gear, loved by thousands across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg" className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every Nexopod is crafted with cutting-edge technology to deliver an unmatched audio experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nexopods */}
      <section className="py-24 bg-card/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose
                <span className="block text-gradient">Nexopods?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe premium audio should be accessible to everyone. That's why we combine 
                cutting-edge technology with thoughtful design at prices that won't break the bank.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Premium sound quality at affordable prices",
                  "Designed specifically for the Indian market",
                  "Rigorous quality testing on every product",
                  "Dedicated customer support in Hindi & English"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about">
                <Button variant="outline" size="lg" className="gap-2">
                  Our Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                alt="Premium Headphones"
                className="relative w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-y border-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {trustItems.map((item, index) => (
              <div key={item.title} className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who've made the switch to Nexopods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <span className="font-medium">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_100%_50%/0.15),transparent_70%)]" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience
            <span className="block text-gradient">Premium Sound?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the Nexopods family today and discover why thousands of Indians choose us for their audio needs.
          </p>
          <Link to="/shop">
            <Button variant="hero" size="xl" className="gap-2">
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
