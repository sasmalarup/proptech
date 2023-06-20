"use client";
import React from 'react';
import HomeBanner from './banner'
import HomeTabs from './tabs';
import InqueryCard from './inqueryForm';
//import AssetsCard from '../../molecules/Card';
import BenifitsCard from '../../molecules/benifitsCard/index';

import TestimonialsCard from '../../molecules/testimonialsCard/index';
import Propertyblock from './propertyblock';
import Partner from './partner';
import { setGlobalstate } from "@/redux/features/globalSlice";
import { useDispatch } from "react-redux";
import FeaturedBanner from './featuredBanner';
import './styles.scss';
import Propertybyarea from './propertybyarea';
import Propertyrent from './propertyrent';
import Propertysale from './propertysale';
import Blog from './blog';

function HomePage({ id }) {
  const dispatch = useDispatch()
  dispatch(setGlobalstate(id))

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