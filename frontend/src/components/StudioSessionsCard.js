import React, { useState } from 'react';
import './StudioSessionsCard.css';

const packages = [
  {
    id: 'easy',
    title: 'Easy',
    price: '₱900',
    description: '15min session, 1 outfit, 3 edited digital copies, 1x 5R, 4x wallet size prints, 1 backdrop and setup',
  },
  {
    id: 'ideal',
    title: 'Ideal',
    price: '₱3000',
    description: '1hr session, 2 outfits, 5 edited digital copies, 2x 8R, 3x 5R prints, 2 backdrops and setups',
  },
  {
    id: 'better',
    title: 'Better',
    price: '₱5000',
    description: '2hr session, 3 outfits, 10 edited digital copies, 4x 8R, 6x 5R prints, 3 backdrops and setups',
  },
  {
    id: 'plus',
    title: 'Plus',
    price: '₱7000',
    description: '3hr session, 3 outfits, 15 edited copies, 1x A3+, 5x 8R, 5x 5R, 4x 3R prints, 4 backdrops and setups',
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '₱10000',
    description: '4hr session, 4 outfits, 25 edited copies, 1x A3+, 8x 8R, 10x 5R, 6x 3R, 4 setups, cloud delivery',
  },
];

const StudioSessionsCard = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="studio-session-container">
      {!selectedPackage && (
        <div className="package-list">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card" onClick={() => handleSelect(pkg)}>
              <h4>{pkg.title}</h4>
              <p>{pkg.price}</p>
            </div>
          ))}
        </div>
      )}

      {selectedPackage && (
        <div className="selected-package-view">
          <div className="package-info">
            <h3>{selectedPackage.title} Package</h3>
            <p><strong>Price:</strong> {selectedPackage.price}</p>
            <p>{selectedPackage.description}</p>
            <button onClick={() => setSelectedPackage(null)} className="btn btn-secondary mt-3">Back to Packages</button>
          </div>
          <div className="booking-panel">
            <h5>Book Now</h5>
            <input type="text" placeholder="Your Contact Number" className="form-control mb-2" />
            <label>Select Date:</label>
            <input type="date" className="form-control mb-2" />
            <button className="btn btn-primary">Confirm Booking</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioSessionsCard;
