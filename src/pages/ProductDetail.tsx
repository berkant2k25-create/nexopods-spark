import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, Truck, Shield, RefreshCw, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, products } from "@/data/products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button variant="outline">Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <Link to="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2 capitalize">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-gradient">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-lg font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {discount}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              <div>
                <p className="font-medium mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? "border-primary scale-110"
                          : "border-border"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="font-medium mb-3">Key Features</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4 pt-4">
                <Button variant="hero" size="xl" className="w-full gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart - ₹{product.price.toLocaleString()}
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">1 Year Warranty</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">7 Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
