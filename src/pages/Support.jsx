import { useState } from 'react';

const Support = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thanks! Our team will reply to hello@go4profit.us within one business day.');
  };

  return (
    <section className="section form-section">
      <div className="section-heading">
        <p className="eyebrow">Customer Support</p>
        <h2>Questions, swaps, or service needs?</h2>
        <p>
          Fill out the form and our concierge will follow up. We cover warranty touchups, assembly queries, and ride tuning for
          every Nomad Bike purchase.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Full name
            <input type="text" name="name" placeholder="Avery Rider" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="hello@go4profit.us" required />
          </label>
        </div>
        <label>
          Subject
          <input type="text" name="subject" placeholder="Warranty question or repair" required />
        </label>
        <label>
          How can we help?
          <textarea name="message" placeholder="Tell us about the issue or customization you need." required />
        </label>
        <button type="submit" className="btn">
          Submit request
        </button>
        {status && <p className="status-msg">{status}</p>}
      </form>
    </section>
  );
};

export default Support;
