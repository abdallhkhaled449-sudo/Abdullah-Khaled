import { useState, createContext, useContext, ReactNode } from "react";
import { Link } from "react-router-dom";

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

// Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

// Cart Provider
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Products Data
const products: Product[] = [
  {
    id: 1,
    name: "Premium Watch",
    price: 299,
    image: "⌚",
    category: "Accessories",
    description: "Elegant timepiece with gold accents",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 189,
    image: "👜",
    category: "Bags",
    description: "Handcrafted genuine leather",
  },
  {
    id: 3,
    name: "Silk Scarf",
    price: 79,
    image: "🧣",
    category: "Accessories",
    description: "Pure silk with exclusive patterns",
  },
  {
    id: 4,
    name: "Diamond Ring",
    price: 599,
    image: "💍",
    category: "Jewelry",
    description: "Stunning diamond setting",
  },
  {
    id: 5,
    name: "Gold Necklace",
    price: 449,
    image: "📿",
    category: "Jewelry",
    description: "18k gold chain necklace",
  },
  {
    id: 6,
    name: "Designer Wallet",
    price: 129,
    image: "👛",
    category: "Accessories",
    description: "Premium leather wallet",
  },
];

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card h-100 d-flex flex-column">
      <div
        className="p-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--luxury-black-lighter) 0%, var(--luxury-black) 100%)",
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "4rem" }}>{product.image}</span>
      </div>
      <div className="p-3 flex-grow-1 d-flex flex-column">
        <span className="text-silver small mb-1">{product.category}</span>
        <h5 className="text-gold mb-2">{product.name}</h5>
        <p className="text-silver small mb-3 flex-grow-1">
          {product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-gold-gradient h5 mb-0">${product.price}</span>
          <button
            className={`btn btn-sm ${
              added ? "btn-success" : "btn-luxury-gold"
            }`}
            onClick={handleAdd}
            style={{ minWidth: "100px" }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Cart Sidebar Component
const CartSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = async () => {
    setCheckingOut(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCheckingOut(false);
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 3000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 ${
          isOpen ? "d-block" : "d-none"
        }`}
        style={{ background: "rgba(0,0,0,0.7)", zIndex: 1040 }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className="position-fixed top-0 end-0 h-100 d-flex flex-column"
        style={{
          width: "400px",
          maxWidth: "100%",
          background: "var(--luxury-black-light)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 1050,
          borderLeft: "1px solid var(--luxury-gold)",
        }}
      >
        <div
          className="p-4 d-flex justify-content-between align-items-center"
          style={{ borderBottom: "1px solid var(--luxury-black-lighter)" }}
        >
          <h4 className="text-gold mb-0">Shopping Cart</h4>
          <button className="btn btn-sm text-silver" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="flex-grow-1 overflow-auto p-4">
          {orderPlaced ? (
            <div className="text-center py-5">
              <span style={{ fontSize: "4rem" }}>🎉</span>
              <h4 className="text-gold mt-3">Order Placed!</h4>
              <p className="text-silver">Thank you for your purchase.</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-5">
              <span style={{ fontSize: "3rem" }}>🛒</span>
              <p className="text-silver mt-3">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="d-flex gap-3 mb-3 p-3"
                style={{
                  background: "var(--luxury-black)",
                  border: "1px solid var(--luxury-black-lighter)",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{item.image}</span>
                <div className="flex-grow-1">
                  <h6 className="text-gold mb-1">{item.name}</h6>
                  <p className="text-silver small mb-2">${item.price}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-luxury-outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ padding: "2px 10px" }}
                    >
                      -
                    </button>
                    <span className="text-silver">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-luxury-outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ padding: "2px 10px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-gold mb-2">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    className="btn btn-sm"
                    style={{ color: "var(--destructive)" }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && !orderPlaced && (
          <div
            className="p-4"
            style={{ borderTop: "1px solid var(--luxury-black-lighter)" }}
          >
            <div className="d-flex justify-content-between mb-3">
              <span className="text-silver">Subtotal</span>
              <span className="text-gold">${total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="text-silver">Shipping</span>
              <span className="text-gold">Free</span>
            </div>
            <div
              className="d-flex justify-content-between mb-4 pb-3"
              style={{ borderBottom: "1px solid var(--luxury-black-lighter)" }}
            >
              <span className="text-gold h5 mb-0">Total</span>
              <span className="text-gold-gradient h5 mb-0">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="btn btn-luxury-gold w-100"
              onClick={handleCheckout}
              disabled={checkingOut}
            >
              {checkingOut ? "Processing..." : "Checkout"}
            </button>
            <button
              className="btn btn-luxury-outline w-100 mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// Main E-commerce Component
const EcommerceContent = () => {
  const { itemCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section
        className="py-4"
        style={{ marginTop: "80px", background: "var(--luxury-black-light)" }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/projects" className="btn btn-luxury-outline btn-sm">
              ← Back to Projects
            </Link>
            <h1
              className="text-gold-gradient mb-0"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}
            >
              E-Commerce Store
            </h1>
            <button
              className="btn btn-luxury-gold position-relative"
              onClick={() => setCartOpen(true)}
            >
              🛒 Cart
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-5">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`btn ${
                    selectedCategory === cat
                      ? "btn-luxury-gold"
                      : "btn-luxury-outline"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-sm-6 col-lg-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Tech Info */}
          <div
            className="mt-5 p-4"
            style={{ border: "1px solid var(--luxury-black-lighter)" }}
          >
            <h5 className="text-gold mb-3">Technical Highlights</h5>
            <ul className="text-silver mb-0 ps-3">
              <li className="mb-2">React Context API for global cart state</li>
              <li className="mb-2">
                Add, remove, update quantity functionality
              </li>
              <li className="mb-2">Category filtering</li>
              <li className="mb-2">Cart sidebar with animations</li>
              <li className="mb-2">Checkout flow simulation</li>
              <li>TypeScript for type-safe development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

// Wrapped Component with Provider
const EcommerceApp = () => {
  return (
    <CartProvider>
      <EcommerceContent />
    </CartProvider>
  );
};

export default EcommerceApp;
