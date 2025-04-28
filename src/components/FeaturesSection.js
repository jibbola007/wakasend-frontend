import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="features">
      <h2>Why Choose WakaSend?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Lower Costs</h3>
          <p>Affordable options using public transport, bikes, or walking.</p>
        </div>
        <div className="feature-item">
          <h3>Flexible Riders</h3>
          <p>Anyone can deliver — no bike or car needed.</p>
        </div>
        <div className="feature-item">
          <h3>Trusted & Safe</h3>
          <p>Verified WakaRiders with real-time tracking and reviews.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;