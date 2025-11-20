const Privacy = () => (
  <section className="section">
    <div className="section-heading">
      <p className="eyebrow">Privacy Policy</p>
      <h2>We treat your information with care</h2>
      <p>
        Nomad Bikes collects only the minimal details needed to coordinate checkouts, placements, and support conversations. We do not
        sell customer data or share it with third parties beyond the service providers that help us keep your bikes ready to roll.
      </p>
    </div>
    <div className="policy-card">
      <h3>Data we collect</h3>
      <p>
        Nomad Bikes captures personal details to process reservations, craft support responses, and verify warranty requests that come
        through the site. Typical data points include:
      </p>
      <ul>
        <li>Full name, email, and preferred ride model to coordinate checkouts.</li>
        <li>Billing/shipping address for invoices, staging notes, or delivery logistics.</li>
        <li>Support notes or attachments so we can continue a case without repeated explanations.</li>
      </ul>
    </div>
    <div className="policy-card">
      <h3>Usage and storage</h3>
      <p>
        We use the data for appointment scheduling, customer follow-up, targeted service reminders, and warranty correspondence. The
        information is stored securely using industry standard encryption when at rest and in transit. Retention is limited to the time
        needed to fulfill the service or support interaction unless another legal basis—such as a longer warranty period—requires
        keeping it longer.
      </p>
      <p>
        Nomad Bikes does not sell customer data. Any marketing messages require explicit opt-in, and you can unsubscribe at any time.
      </p>
    </div>
    <div className="policy-card">
      <h3>Sharing</h3>
      <p>
        We may share information with trusted contractors or service providers who help assemble, ship, or maintain your bike, but we
        ensure each third party agrees to protect the data and only access it for the defined purpose. We also comply with legal
        obligations if a court or regulator requests information.
      </p>
    </div>
    <div className="policy-card">
      <h3>Your choices</h3>
      <p>
        You can request access, correction, or deletion of your personal data by emailing hello@go4profit.us. Provide sufficient details
        to locate your records. We will respond within a reasonable timeframe and confirm any changes once processed.
      </p>
      <p>
        Business hours: Monday through Friday, 9:00 AM to 5:00 PM EST. Add "Privacy" to the subject line to speed up our reply.
      </p>
    </div>
  </section>
);

export default Privacy;
