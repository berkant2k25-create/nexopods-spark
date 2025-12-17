export interface Product {
  id: string;
  name: string;
  category: "earbuds" | "headphones";
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: "nexopods-pro",
    name: "Nexopods Pro",
    category: "earbuds",
    price: 2999,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    description: "Experience premium audio with Active Noise Cancellation and 40-hour battery life. Perfect for music lovers and professionals.",
    features: ["Active Noise Cancellation", "40H Battery Life", "IPX5 Water Resistant", "Touch Controls", "Gaming Mode"],
    rating: 4.8,
    reviews: 2456,
    inStock: true,
    badge: "Best Seller",
    colors: ["#0a0a0a", "#ffffff", "#00d4aa"]
  },
  {
    id: "nexopods-lite",
    name: "Nexopods Lite",
    category: "earbuds",
    price: 1499,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
    description: "Lightweight comfort meets powerful sound. Ideal for everyday use with smart touch controls.",
    features: ["30H Battery Life", "IPX4 Water Resistant", "Touch Controls", "Fast Charging"],
    rating: 4.5,
    reviews: 1823,
    inStock: true,
    colors: ["#0a0a0a", "#ffffff"]
  },
  {
    id: "nexopods-gaming",
    name: "Nexopods Gaming",
    category: "earbuds",
    price: 3499,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=800&q=80",
    description: "Ultra-low latency earbuds designed for mobile gaming. RGB lighting and immersive surround sound.",
    features: ["45ms Low Latency", "RGB Lighting", "Dual Mic Noise Cancellation", "35H Battery Life", "Gaming Mode"],
    rating: 4.7,
    reviews: 987,
    inStock: true,
    badge: "New",
    colors: ["#0a0a0a", "#ff4444"]
  },
  {
    id: "nexophones-x1",
    name: "Nexophones X1",
    category: "headphones",
    price: 4999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    description: "Over-ear wireless headphones with premium drivers and studio-quality sound. Perfect for audiophiles.",
    features: ["Hi-Res Audio", "60H Battery Life", "ANC", "Foldable Design", "Multi-device Pairing"],
    rating: 4.9,
    reviews: 654,
    inStock: true,
    badge: "Premium",
    colors: ["#0a0a0a", "#f5f5dc"]
  },
  {
    id: "nexophones-sport",
    name: "Nexophones Sport",
    category: "headphones",
    price: 3499,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
    description: "Sweat-proof on-ear headphones built for intense workouts. Secure fit and powerful bass.",
    features: ["IPX7 Waterproof", "40H Battery Life", "Secure Fit", "Quick Charge", "Bass Boost"],
    rating: 4.6,
    reviews: 432,
    inStock: true,
    colors: ["#0a0a0a", "#00d4aa"]
  },
  {
    id: "nexopods-studio",
    name: "Nexopods Studio",
    category: "earbuds",
    price: 4499,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
    description: "Studio-grade earbuds with spatial audio and premium drivers. For the true audiophile.",
    features: ["Spatial Audio", "Hi-Res Certified", "50H Battery", "Premium Drivers", "ANC Pro"],
    rating: 4.9,
    reviews: 321,
    inStock: true,
    badge: "Premium",
    colors: ["#0a0a0a", "#c0c0c0"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: "earbuds" | "headphones"): Product[] => {
  return products.filter(product => product.category === category);
};
