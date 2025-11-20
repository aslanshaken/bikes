import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useCart } from '../context/CartContext';

const headerLinks = [
  { path: '/checkout', label: 'Checkout' },
  { path: '/support', label: 'Support' }
];

const footerLinks = [
  { path: '/checkout', label: 'Checkout', includeBadge: true },
  { path: '/support', label: 'Customer Support' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' }
];

const Layout = () => {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const year = new Date().getFullYear();
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <NavLink to="/" className="logo-mark">
          <img src={logo} alt="Nomad Bikes logo" />
          <div className="logo-text">Nomad Bikes</div>
        </NavLink>
        <nav>
          {headerLinks.map((item) => (
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

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>Nomad Bikes</strong>
          <p>hello@go4profit.us</p>
                    <p>929-928-5292</p>
          <p className="footer-hours">Monday - Friday</p>
          <p className="footer-hours">9:00 AM - 5:00 PM CST</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map(({ path, label, includeBadge }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'footer-link active' : 'footer-link')}
            >
              <span>{label}</span>
              {includeBadge && count > 0 && (
                <span className="cart-badge footer" aria-label={`Cart has ${count} item${count>1?'s':''}`}>
                  {count}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="footer-meta">
          <p>© {year} Nomad Bikes. Built for riders everywhere.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
