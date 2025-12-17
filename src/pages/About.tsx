import { Target, Heart, Zap, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Every product undergoes rigorous testing to ensure premium sound quality and durability."
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "We're obsessed with customer satisfaction. Your happiness is our success metric."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries to bring you the latest in audio technology."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a community of audio enthusiasts who share our passion for great sound."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexopods</h1>
            <p className="text-xl text-muted-foreground">
              Born in India, built for the world. We're on a mission to make premium audio 
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Our Team"
                className="rounded-3xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexopods was founded in 2022 with a simple idea: Indian youth deserve 
                world-class audio products without the premium price tag. We noticed that 
                great earbuds and headphones were either too expensive or compromised on quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founding team of audio engineers and designers came together to create 
                products that rival international brands at a fraction of the cost. Today, 
                we're proud to serve over 50,000 happy customers across India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every Nexopod is designed with the Indian consumer in mind – from long battery 
                life for busy commutes to sweat-resistant builds for our diverse climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product design to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gradient">50K+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">15+</p>
              <p className="text-muted-foreground">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">4.8★</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">24/7</p>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
