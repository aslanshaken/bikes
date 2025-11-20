import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const [message, setMessage] = useState('');
  const { items, subtotal, removeItem, setQty, clear } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Your request is in queue—our team will reach out to confirm the build details shortly.');
  };

  const shipping = items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <section className="section checkout-section">
      <div className="section-heading">
        <p className="eyebrow">Checkout</p>
        <h2>{items.length === 0 ? 'Your Cart is Empty' : 'Complete Your Reservation'}</h2>
        <p>
          {items.length === 0
            ? 'Add bikes from the home page to begin checkout.'
            : 'Enter your contact and payment placeholder details. No real charges are processed on this demo.'}
        </p>
      </div>
      {items.length === 0 ? (
        <p className="empty-msg">Your cart is empty. Head back and add a bike.</p>
      ) : (
        <div className="checkout-grid">
          {/* LEFT: Contact & Payment */}
          <form onSubmit={handleSubmit} className="checkout-form">
            <h3 className="subhead">Contact Information</h3>
            <div className="form-grid">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Jordan Rider" required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" placeholder="hello@nomadbikes.com" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="(555) 123-4567" />
              </label>
            </div>
            <h4 className="subhead small">Shipping Address</h4>
            <div className="form-grid">
              <label>
                Street Address
                <input type="text" name="street" placeholder="123 Nomad Lane" required />
              </label>
              <label>
                City
                <input type="text" name="city" placeholder="Brooklyn" required />
              </label>
              <label>
                ZIP Code
                <input type="text" name="zip" placeholder="11201" required />
              </label>
            </div>
            <p className="shipping-note">🇺🇸 USA Only - Standard Shipping $15</p>
            <h3 className="subhead">Payment Information</h3>
            <div className="form-grid">
              <label>
                Card Number
                <input type="text" name="card" inputMode="numeric" placeholder="4242 4242 4242 4242" required />
              </label>
              <label>
                MM/YY
                <input type="text" name="exp" placeholder="MM / YY" required />
              </label>
              <label>
                CVV
                <input type="text" name="cvc" inputMode="numeric" placeholder="123" required />
              </label>
            </div>
            <button type="submit" className="btn purchase-btn">
              Complete Purchase - ${total.toLocaleString()}
            </button>
            {message && <p className="status-msg">{message}</p>}
          </form>
          {/* RIGHT: Order Summary */}
          <div className="order-summary">
            <h3 className="subhead">Order Summary</h3>
            <ul className="summary-list">
              {items.map((item) => (
                <li key={item.name} className="summary-item">
                  <div className="summary-main">
                    <strong>{item.name}</strong>
                    <span>${item.price.toLocaleString()}</span>
                  </div>
                  <div className="qty-controls">
                    <button type="button" onClick={() => setQty(item.name, item.qty - 1)} disabled={item.qty === 1}>−</button>
                    <span className="qty-count">{item.qty}</span>
                    <button type="button" onClick={() => setQty(item.name, item.qty + 1)}>+</button>
                    <button type="button" className="remove-line" onClick={() => removeItem(item.name)}>✕</button>
                  </div>
                  <div className="line-total">${(item.price * item.qty).toLocaleString()}</div>
                </li>
              ))}
            </ul>
            <div className="totals">
              <div className="totals-row">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="totals-row">
                <span>Shipping (USA Only)</span>
                <span>${shipping.toLocaleString()}</span>
              </div>
              <div className="totals-row grand">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <button type="button" className="text-btn clear-small" onClick={clear}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
