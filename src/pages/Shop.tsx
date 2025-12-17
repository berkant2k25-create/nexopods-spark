import { useState } from "react";
import { Headphones, EarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products, getProductsByCategory } from "@/data/products";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "earbuds" | "headphones">("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : getProductsByCategory(activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card/50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete range of premium wireless audio products.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeCategory === "all" ? "hero" : "outline"}
              onClick={() => setActiveCategory("all")}
            >
              All Products
            </Button>
            <Button
              variant={activeCategory === "earbuds" ? "hero" : "outline"}
              onClick={() => setActiveCategory("earbuds")}
              className="gap-2"
            >
              <EarIcon className="h-4 w-4" />
              Earbuds
            </Button>
            <Button
              variant={activeCategory === "headphones" ? "hero" : "outline"}
              onClick={() => setActiveCategory("headphones")}
              className="gap-2"
            >
              <Headphones className="h-4 w-4" />
              Headphones
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
