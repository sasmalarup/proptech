"use client";
import React,{Fragment} from 'react';
import HomeBanner from './banner'
import HomeTabs from './tabs';
import Propertyblock from './propertyblock';
import FeaturedBanner from './featuredBanner';
import './styles.scss';
import Propertybyarea from './propertybyarea';
import Propertyrent from './propertyrent';
import Propertysale from './propertysale';
import Blog from './blog';

function HomePage({origin}) {
  return (
    <>
      <HomeBanner origin={origin}/>
      <HomeTabs origin={origin}/>
       <Propertyblock origin={origin}/>
      <FeaturedBanner origin={origin}/>
      <Propertybyarea origin={origin}/>
      <Propertyrent origin={origin}/>
      <Propertysale origin={origin}/>
      <Blog origin={origin}/>
      </>
  );
}
export default HomePage;