import BikeCard from '../components/BikeCard';
import PaceBlueSteel from '../assets/PaceBlueSteel2.avif';
import Shot1 from '../assets/Screenshot 2025-11-20 120909.png';
import Shot2 from '../assets/Screenshot 2025-11-20 121342.png';
import Generic from '../assets/image.png';

const bikes = [
  {
    name: 'Glacier Scout',
    price: 1480,
    summary: 'Drop-bar commuter with carbon fork, Shimano 105, and stealth routing for clean lines.',
    tags: ['Hydraulic', '1x11', 'Carbon fork'],
    image: PaceBlueSteel
  },
  {
    name: 'Highland Nomad',
    price: 2200,
    summary: 'Gravel-ready frame with 650b clearance, SRAM Rival, and tire room for any trail.',
    tags: ['Tubeless', 'Dropper-ready', 'Wide-range'],
    image: Shot1
  },
  {
    name: 'Metro Signal',
    price: 1620,
    summary: 'Urban belt-drive with integrated fenders, dynamo lighting, and quiet efficiency.',
    tags: ['Belt drive', 'Dyno lights', 'Racks ready'],
    image: Shot2
  },
  {
    name: 'Summit Flux',
    price: 2480,
    summary: '140mm trail platform with progressive geometry and coil-friendly suspension.',
    tags: ['Trail tuned', 'Dropper post', 'Boost spacing'],
    image: Generic
  }
];

const Home = () => (
  <>
    <section className="section hero">
      <div className="hero-copy">
        <p className="eyebrow">Electric · Commuter · Trail</p>
        <h1>Nomad Bikes makes every ride feel intentional.</h1>
        <p>
          We design a curated collection of four modern bikes priced between $1,500 and $2,500. Each build balances confident
          handling, premium components, and ready-to-ride style so you can dial in the experience that fits your everyday escape.
        </p>
        <div className="hero-actions">
          <a className="btn" href="/checkout">
            Reserve a Checkout Slot
          </a>
          <span className="muted">Concierge support included</span>
        </div>
      </div>
      <div className="hero-card">
        <p className="eyebrow">Contact</p>
        <h3>hello@go4profit.us</h3>
        <p>Monday - Friday, 9:00 AM - 5:00 PM EST</p>
        <div className="pill">Designated NYC atelier</div>
        <div className="pill soft">Complimentary assembly</div>
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Lineup</p>
        <h2>Purposeful bikes, refined touches</h2>
        <p>Every Nomad is tuned in our studio, with supportive geometry plus modern conveniences.</p>
      </div>
      <div className="product-grid">
        {bikes.map((bike) => (
          <BikeCard key={bike.name} bike={bike} />
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Why riders choose Nomad</p>
        <h2>Tested, tuned, and always accessible</h2>
        <p>
          From stack adjustments to concierge messaging, we keep every rider informed. Pick a build, secure a checkout window,
          and our team will preflight the bike before you arrive. We pair transparent pricing with robust warranties for peace
          of mind.
        </p>
      </div>
    </section>
  </>
);

export default Home;
