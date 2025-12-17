import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, subscribe to our newsletter, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Order history and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and our products</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Shipping partners to deliver your orders</li>
                <li>Payment processors to complete transactions</li>
                <li>Service providers who assist our operations</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. 
                All payment transactions are encrypted using SSL technology. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section id="refund">
              <h2 className="text-2xl font-semibold mb-4">6. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 7-day return policy on all products. To be eligible for a return:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Product must be unused and in original packaging</li>
                <li>Return request must be initiated within 7 days of delivery</li>
                <li>Refunds are processed within 5-7 business days</li>
                <li>Original shipping costs are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-primary mt-4">support@nexopods.in</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
