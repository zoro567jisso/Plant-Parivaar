import React from 'react';
import Hero from '../components/Hero';
import FeaturedPlants from '../components/FeaturedPlants';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPlants />
      <Features />
      <Newsletter />
    </>
  );
}