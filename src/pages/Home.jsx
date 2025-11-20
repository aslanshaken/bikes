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
        <p className="eyebrow">Urban · Gravel · Adventure</p>
        <h1>Nomad Bikes ships dialed builds on your schedule.</h1>
        <p>
          Choose one of four ready-to-ride bikes priced between $1,500 and $2,500. We handle the prep, torque check, and boxing—
          you simply pick the model that matches your ride and we ship it straight from our studio within 72 hours.
        </p>
        <div className="hero-actions">
          <span className="muted">No custom menus—select a build and we handle the rest.</span>
        </div>
      </div>
      <div className="hero-card">
        <p className="eyebrow">Ride Concierge</p>
        <h3>Talk directly with us</h3>
        <p>hello@go4profit.us</p>
        <p>Monday - Friday · 9:00 AM - 5:00 PM EST</p>
        <div className="pill">SoHo fitting studio</div>
        <div className="pill soft">Pro assembly included</div>
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

    <section className="section info-grid">
      <article className="info-card">
        <p className="eyebrow">Shipping</p>
        <h3>USA rides ship $50 - $78</h3>
        <p>Flat rates based on region. We pad every frame and send tracking as soon as it leaves the studio.</p>
      </article>
      <article className="info-card">
        <p className="eyebrow">Warranty</p>
        <h3>2 years frame + concierge</h3>
        <p>Drop us a note and a builder replies within one business day with next steps.</p>
      </article>
      <article className="info-card">
        <p className="eyebrow">Turnaround</p>
        <h3>72 hr build window</h3>
        <p>Reserve a slot, we pre-flight the bike, you roll out with tuned suspension and synced drivetrain.</p>
      </article>
    </section>

    <section className="section shipping-section">
      <div className="section-heading">
        <p className="eyebrow">Ready to ship</p>
        <h2>Studio prepped, boxed, and on the road</h2>
        <p>Pick a bike, confirm your size, and we send tracking the moment it leaves our SoHo bench.</p>
      </div>
      <div className="shipping-grid">
        <article className="shipping-card">
          <h3>Confirm</h3>
          <p>Choose any Nomad build, drop it in checkout, and we verify fit and availability within hours.</p>
        </article>
        <article className="shipping-card">
          <h3>Prep</h3>
          <p>Our team torques every bolt, bleeds brakes, and loads spares so the bike arrives tuned.</p>
        </article>
        <article className="shipping-card">
          <h3>Ship</h3>
          <p>We partner with insured carriers for 2-5 day delivery across the USA with real-time tracking.</p>
        </article>
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
      <div className="process-grid">
        <div className="process-step">
          <h4>01 · Select</h4>
          <p>Pick the frame that fits your ride style and add it to checkout.</p>
        </div>
        <div className="process-step">
          <h4>02 · Tune</h4>
          <p>We confirm stack, tire width, and accessories before the 72-hour bench session.</p>
        </div>
        <div className="process-step">
          <h4>03 · Ship / Pickup</h4>
          <p>Collect in NYC or ship anywhere in the USA for $50-$78 with insurance.</p>
        </div>
      </div>
    </section>
  </>
);

export default Home;
