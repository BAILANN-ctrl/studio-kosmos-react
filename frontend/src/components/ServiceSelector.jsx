import React, { useState } from 'react';
import './ServiceSelector.css';

const serviceData = {
  "Studio Sessions": [
    {
      name: "Easy",
      details:
        "15min session, 1 outfit, 3 edited digital copies, 1x 5R, 4x wallet size prints, 1 backdrop and setup for P900"
    },
    {
      name: "Ideal",
      details:
        "1hr session, 2 outfits, 5 edited digital copies, 2x 8R, 3x 5R prints, 2 backdrops and setups for P3000"
    },
    {
      name: "Better",
      details:
        "2hr session, 3 outfits, 10 edited digital copies, 4x 8R, 6x 5R prints, 3 backdrops and setups for P5000"
    },
    {
      name: "Plus",
      details:
        "3hr session, 3 outfits, 15 edited digital copies, 1x A3+ print, 5x 8R, 5x 5R, 4x 3R, 4 backdrops and setups for P7000"
    },
    {
      name: "Premium",
      details:
        "4hr session, 4 outfits, 25 edited copies, 1x A3+ print, 8x 8R, 10x 5R, 6x 3R, 4 backdrops and setups, all photos uploaded to cloud for P10000"
    }
  ],
  "Pulsar": [
    {
      name: "Juno (Easy and Quick)",
      details:
        "Up to 2 persons, 15min photoshoot, 15min photo selection, 1bg, 4 edited photos, 2x grid prints (4 shots), 1x 5R, 20 digital copies for P500"
    },
    {
      name: "Vesta (Made for couples)",
      details:
        "Up to 2 persons, 30min photoshoot, 15min selection, 2 bg, 4 edited photos, 2x grid prints, 2x 5R, 2x pocket prints, 25 digital copies for P650"
    },
    {
      name: "Pallas (Best for friends)",
      details:
        "Up to 4 persons, 30min photoshoot, 15min selection, 2bg, 4 edited photos, 4x grid prints, 4 pocket prints, 25 digital copies for P650"
    },
    {
      name: "Ceres (Go big!)",
      details:
        "Up to 5 persons, 45min shoot, 20min selection, 4bg, 4 edited photos, 4x grid prints, 1x 5R, 4 pocket prints, 40 digital copies for P1000"
    }
  ]
};

function ServiceSelector({ selectedService, setSelectedService }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedPackage(null);
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="service-section">
      <div className="service-bar">
        {Object.keys(serviceData).map((service) => (
          <button
            key={service}
            className={`service-button ${
              selectedService === service ? 'active' : ''
            }`}
            onClick={() => handleServiceClick(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="overlay">
          <h2>{selectedService} Packages</h2>
          <div className="packages-list">
            {serviceData[selectedService].map((pkg) => (
              <div
                key={pkg.name}
                className="package-card"
                onClick={() => handlePackageClick(pkg)}
              >
                <h4>{pkg.name}</h4>
                {!selectedPackage || selectedPackage.name !== pkg.name ? (
                  <p>Click to view details</p>
                ) : (
                  <p>{pkg.details}</p>
                )}
              </div>
            ))}
          </div>
          {selectedPackage && (
            <div className="booking-side">
              <h3>Booking for: {selectedPackage.name}</h3>
              <p>{selectedPackage.details}</p>
              {/* Booking inputs and calendar will go here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ServiceSelector;
