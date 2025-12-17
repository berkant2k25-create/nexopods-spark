import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gradient">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-muted-foreground line-through text-sm">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Colors */}
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border-2 border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <Button variant="hero" className="w-full gap-2">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
