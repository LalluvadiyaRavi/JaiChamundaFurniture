import "./Cart.css";
import { useCart } from "../context/CartContext";
import { Helmet } from "react-helmet-async";

function Cart() {
  const { cart , removeFromCart , increaseQuantity , decreaseQuantity , clearCart } = useCart();
  const total = cart.reduce(
    (sum,item) => sum +item.price * item.quantity,
    0
  );
  return (
    <>
    <Helmet>
    <title>Cart | Jai Chamunda Furniture</title>
    <meta
      name="description"
      content="View products added to your cart at Jai Chamunda Furniture."
    />
  </Helmet>
  <div className="cart">
      <h1>Shopping Cart</h1>
      <p className="cart-subtitle">
        Review your selected furniture items.
      </p>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>🛒 Cart is Empty</h2>

          <p>
            Explore our products and add items.
          </p>

          <a
            href="/#/products"
            className="shop-btn"
          >
            Browse Products
          </a>
        </div>
      ) : (
        <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price?.toLocaleString()}</p>
                <div className="quantity-controls">
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                    >
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </button>
                </div>
                
                <p className="subtotal">
                Subtotal: ₹
                {(item.price * item.quantity).toLocaleString()}
                </p>
                <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                >
                Remove ❌
                </button>
              </div>
            </div>
            
          ))}
        </div>
        <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
            </div>
            <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
            </div>

            <button className="checkout-btn">
            Proceed to Inquiry
            </button>

            <button
            className="clear-cart-btn"
            onClick={clearCart}
            >
            Clear Cart
            </button>

        </div>
        </div>
      )}
    </div>
    </>
    
  );
}

export default Cart;