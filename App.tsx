import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Organizers from './components/Organizers';
import Guests from './components/Guests';
import EventInfo from './components/EventInfo';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Organizers />
        <Guests />
        <EventInfo />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;