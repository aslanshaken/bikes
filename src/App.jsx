import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="support" element={<Support />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default App;
