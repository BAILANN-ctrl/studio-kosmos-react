import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServiceSelector from './components/ServiceSelector';

function App() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Home onBookClick={scrollToServices} />
      <div ref={servicesRef}>
        <ServiceSelector />
      </div>
    </>
  );
}

export default App;
