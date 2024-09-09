import React from 'react';
import Hero from '../../components/hero/Hero';
import Inspiration from '../../components/inspiration/Inspiration';
import CompExperties from '../../components/comprihence-experties/CompExperties';
import Services from '../../components/services/Services';
import Offers from '../../components/what-we-offer/Offers';
import MyLocation from '../../components/location/Location';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navbar/Nav';

const Home = () => {

  return (
    <div>
      {/* <Navbar /> */}
      <Nav />
      <section id='hero'>
        <Hero />
      </section>
      <section id='inspire'>
        <Inspiration />
      </section>
      <section id='experties'>
        <CompExperties />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='offers'>
        <Offers />
      </section>
      <section id='location'>
        <MyLocation />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
