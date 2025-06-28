import React from 'react';

function Home({ onBookClick }) {
  return (
    <section
      id="home"
      className="text-center d-flex align-items-center justify-content-center min-vh-100"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Optional Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0.5,
        }}
      ></div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/assets/cosmos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="container" style={{ zIndex: 1 }}>
        <h1 className="display-3 text-white">Welcome to Studio Kosmos</h1>
        <p className="lead text-white">Capture your moments with our professional photography services.</p>
        <button className="btn btn-primary btn-lg" onClick={onBookClick}>
          Book an Appointment
        </button>
      </div>
    </section>
  );
}

export default Home;
