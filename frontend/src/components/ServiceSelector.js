import React, { useState } from 'react';
import '../App.css';

const services = {
  'Studio Sessions': [
    {
      name: 'Easy',
      details: '15min session, 1 outfit, 3 edited digital copies, 1x 5R, 4x wallet prints, 1 backdrop and setup. ₱900'
    },
    {
      name: 'Ideal',
      details: '1hr session, 2 outfits, 5 edited digital copies, 2x 8R, 3x 5R prints, 2 backdrops and setups. ₱3000'
    },
    {
      name: 'Better',
      details: '2hr session, 3 outfits, 10 edited digital copies, 4x 8R, 6x 5R prints, 3 backdrops and setups. ₱5000'
    },
    {
      name: 'Plus',
      details: '3hr session, 3 outfits, 15 edited digital copies, 1x A3+, 5x 8R, 5x 5R, 4x 3R, 4 backdrops and setups. ₱7000'
    },
    {
      name: 'Premium',
      details: '4hr session, 4 outfits, 25 edited copies, 1x A3+, 8x 8R, 10x 5R, 6x 3R, 4 backdrops/setups, cloud upload. ₱10000'
    }
  ],
  Pulsar: [
    {
      name: 'Juno',
      details: 'Up to 2 persons, 15min shoot, 15min selection, 1bg, 4 edits, 2 grid prints, 1x 5R, 20 digital copies. ₱500'
    },
    {
      name: 'Vesta',
      details: 'Couples, 30min shoot, 15min selection, 2bg, 4 edits, 2 grid prints, 2x 5R, 2 pocket prints, 25 digital. ₱650'
    },
    {
      name: 'Pallas',
      details: 'Groups (up to 4), 30min shoot, 15min selection, 2bg, 4 edits, 4 grid prints, 4 pocket prints, 25 digital. ₱650'
    },
    {
      name: 'Ceres',
      details: 'Up to 5 persons, 45min shoot, 20min selection, 4bg, 4 edits, 4 grid prints, 1x 5R, 4 pocket prints, 40 digital. ₱1000'
    }
  ]
};

function ServiceSelector() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="text-center">
      <div className="service-buttons">
        {Object.keys(services).map(service => (
          <button
            key={service}
            className={`service-button ${selectedService === service ? 'active' : ''}`}
            onClick={() => {
              setSelectedService(service);
              setSelectedPackage(null);
            }}
          >
            {service}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="overlay">
          <div className="package-list">
            {services[selectedService].map(pkg => (
              <div
                key={pkg.name}
                className="package-item"
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg.name}
                {selectedPackage?.name === pkg.name && (
                  <div className="package-details">
                    <p>{pkg.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedPackage && (
            <div className="package-details" style={{ marginLeft: '50px' }}>
              <h4>{selectedPackage.name} Package</h4>
              <p>{selectedPackage.details}</p>
              {/* Booking fields and calendar will be placed here */}
              <div className="booking-form mt-4 text-start">
                <h5>Booking Details</h5>
                <label className="form-label">Name</label>
                <input type="text" className="form-control mb-2" placeholder="Enter your name" />

                <label className="form-label">Contact Number</label>
                <input type="text" className="form-control mb-2" placeholder="Enter your contact number" />

                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ServiceSelector;
