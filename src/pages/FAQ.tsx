import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "We ship all orders within 24 hours. Standard delivery takes 3-5 business days across India. Metro cities usually receive orders within 2-3 days."
      },
      {
        q: "Is shipping free?",
        a: "Yes! We offer free shipping on all orders above ₹999. For orders below ₹999, a flat shipping fee of ₹49 applies."
      },
      {
        q: "Can I track my order?",
        a: "Absolutely! Once your order is shipped, you'll receive an email and SMS with tracking details. You can track your package in real-time."
      }
    ]
  },
  {
    category: "Products",
    questions: [
      {
        q: "Are Nexopods compatible with all devices?",
        a: "Yes! All our products support Bluetooth 5.0+ and are compatible with iOS, Android, Windows, and Mac devices."
      },
      {
        q: "What is Gaming Mode?",
        a: "Gaming Mode reduces audio latency to just 45ms, ensuring your game audio is perfectly synced with the action on screen. Perfect for mobile gaming."
      },
      {
        q: "How do I clean my earbuds?",
        a: "Use a soft, dry cloth to wipe the exterior. For the ear tips, gently clean with a slightly damp cloth. Never submerge in water even if water-resistant."
      }
    ]
  },
  {
    category: "Returns & Warranty",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 7-day no-questions-asked return policy. If you're not satisfied, simply return the product in original packaging for a full refund."
      },
      {
        q: "How long is the warranty?",
        a: "All Nexopods products come with a 1-year warranty covering manufacturing defects. Physical damage and misuse are not covered."
      },
      {
        q: "How do I claim warranty?",
        a: "Contact our support team with your order ID and description of the issue. We'll guide you through the warranty claim process."
      }
    ]
  },
  {
    category: "Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe. We also offer Cash on Delivery."
      },
      {
        q: "Is COD available?",
        a: "Yes! Cash on Delivery is available across India for orders up to ₹10,000. A small COD fee of ₹29 applies."
      },
      {
        q: "Do you offer EMI options?",
        a: "Yes, we offer no-cost EMI on select credit cards for orders above ₹3,000. EMI options will be displayed at checkout."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-card/50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gradient">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Still have questions */}
          <div className="text-center py-12 px-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link to="/contact">
              <Button variant="hero">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
