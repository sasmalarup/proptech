"use client";
import React from 'react';
import HomeBanner from './banner'
import HomeTabs from './tabs';
import InqueryCard from './inqueryForm';
//import AssetsCard from '../../molecules/Card';
import BenifitsCard from '../../molecules/benifitsCard/index';
import BlogCard from '../../molecules/blogCard/index';
import TestimonialsCard from '../../molecules/testimonialsCard/index';
import Propertyblock from './propertyblock';
import Partner from './partner';
import { setGlobalstate } from "@/redux/features/globalSlice";
import { useDispatch } from "react-redux";
import FeaturedBanner from './featuredBanner';
import AgentProfle from './agentProfile';
import './styles.scss';
import Propertybyarea from './propertybyarea';
import Propertyrent from './propertyrent';
import Propertysale from './propertysale';

function HomePage({id}) {
  const dispatch=useDispatch()
  dispatch(setGlobalstate(id))
  
  return (
    <>
    
    <HomeBanner />
      
      <HomeTabs/>
      <Propertyblock />
      <FeaturedBanner />
      <Propertybyarea />
      <Propertyrent />
       <Propertysale />
     <InqueryCard />
      <div className="container mt-5 mb-5">
        <div className="row gy-1 flexCenter">
          <div className='featureTitle mt-5'>
            <h2>Our Featured Exclusive</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row flexCenter'>
              <BenifitsCard />
          </div>
        </div>
      </div>
      <div className='propertyWhiteBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Realcity Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
            {[...Array(3)].map((item) => (
              <BlogCard />
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid testimonialsBg mt-5">
        <div className="row gy-1 flexCenter">
          <div className='featureTitle mt-5'>
            <h2>Testimonials</h2>
            <p className='mb-5'>Being a metropolitan city, Kolkata has seen a dramatic positive change in real estate development.</p>
          </div>
          <div className='row flexCenter'>
              <TestimonialsCard />
          </div>
        </div>
      </div>
      <AgentProfle />
      <div className='container partnerRealcity'>
        <Partner />
      </div>
    </>
  );
}
export default HomePage;