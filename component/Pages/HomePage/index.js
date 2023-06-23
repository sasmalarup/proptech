"use client";
import React from 'react';
import HomeBanner from './banner'
import HomeTabs from './tabs';
import Propertyblock from './propertyblock';
import FeaturedBanner from './featuredBanner';
import './styles.scss';
import Propertybyarea from './propertybyarea';
import Propertyrent from './propertyrent';
import Propertysale from './propertysale';
import Blog from './blog';

function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeTabs />
      <Propertyblock />
      <FeaturedBanner />
      <Propertybyarea />
      <Propertyrent />
      <Propertysale />
      <Blog />
    </>
  );
}
export default HomePage;