import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useCart } from '../context/CartContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/checkout', label: 'Checkout' },
  { path: '/support', label: 'Support' },
  { path: '/privacy', label: 'Privacy' },
  { path: '/terms', label: 'Terms' }
];

const Layout = () => {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <NavLink to="/" className="logo-mark">
          <img src={logo} alt="Nomad Bikes logo" />
          <div className="logo-text">Nomad Bikes</div>
        </NavLink>
        <nav>
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
              {item.path === '/checkout' && count > 0 && (
                <span className="cart-badge" aria-label={`Cart has ${count} item${count>1?'s':''}`}>{count}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div>
          <strong>Nomad Bikes</strong>
          <p>hello@go4profit.us · Monday - Friday, 9:00 AM - 5:00 PM EST</p>
        </div>
        <div className="footer-links">
          <NavLink to="/checkout" className="nav-link">
            Checkout {count > 0 && <span className="cart-badge footer" aria-label={`Cart has ${count} item${count>1?'s':''}`}>{count}</span>}
          </NavLink>
          <NavLink to="/support" className="nav-link">
            Customer Support
          </NavLink>
          <NavLink to="/privacy" className="nav-link">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="nav-link">
            Terms of Service
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
