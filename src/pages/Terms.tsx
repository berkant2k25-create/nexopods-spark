import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Nexopods website and services, you accept and agree to be 
                bound by these Terms and Conditions. If you do not agree with any part of these terms, 
                you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Products and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices displayed on our website are in Indian Rupees (INR) and are inclusive of 
                applicable taxes unless stated otherwise. We reserve the right to modify prices at 
                any time without prior notice. Pricing errors may occur, and we reserve the right 
                to cancel orders placed at incorrect prices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you place an order, you agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>All information provided is accurate and complete</li>
                <li>You are authorized to use the payment method</li>
                <li>Your order constitutes an offer to purchase</li>
                <li>We reserve the right to refuse or cancel any order</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to deliver all orders within the estimated timeframe. However, delivery times 
                are estimates and not guaranteed. We are not responsible for delays caused by shipping 
                carriers, natural disasters, or other circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                All Nexopods products come with a 1-year limited warranty covering manufacturing defects. 
                The warranty does not cover:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Physical damage or misuse</li>
                <li>Water damage (beyond rated IP protection)</li>
                <li>Unauthorized modifications or repairs</li>
                <li>Normal wear and tear</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Nexopods and is protected by intellectual 
                property laws. You may not reproduce, distribute, or use any content without our 
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Nexopods shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from your use of our 
                products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the 
                laws of India. Any disputes arising from these terms shall be subject to the exclusive 
                jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. Changes will 
                be effective immediately upon posting on our website. Your continued use of our 
                services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-primary mt-4">legal@nexopods.in</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
