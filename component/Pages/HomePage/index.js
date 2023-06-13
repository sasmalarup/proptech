"use client";
import React from 'react';
import Image from 'next/image';
import hotel from'../../../public/images/propertyHotel.jpeg';
import HomeBanner from './banner'
import HomeTabs from './tabs';
import InqueryCard from './inqueryForm';
import AssetsCard from '../../molecules/Card';
import FeatureCard from '../../molecules/featureCard/index';
import BenifitsCard from '../../molecules/benifitsCard/index';
import BlogCard from '../../molecules/blogCard/index';
import TestimonialsCard from '../../molecules/testimonialsCard/index';
import Partner from './partner';
import { getGlobalstate,setGlobalstate } from "@/redux/features/globalSlice";
import { useDispatch,useSelector } from "react-redux";

import './styles.scss';

function HomePage({id}) {
  const dispatch=useDispatch()
  dispatch(setGlobalstate(id))
  
  return (
    <>
      <HomeBanner />
      <HomeTabs/>
      <div className='container mt-5 mb-5'>
          <div className='row gy-1'>
              <div className='featureTitle'>
                  <h2>Our Feature Exclusive</h2>
                  <p>Lorem Ipsum is simply dume text please change this description</p>
              </div>
              {[...Array(3)].map((item) => (
                <AssetsCard />
              ))}
          </div>
      </div>
      <div className='propertyArea'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Property by area</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='propertyArea_box'>
          {[...Array(12)].map((item) => (
            <a href={'test'} className="col-md-3 col-xs-12 propertyAreaCard">
              <div className='cardimage'>
                <span>
                <Image
                  src={hotel}
                  width='75px'
                  height='75px'
                  alt="image"
                  optimized
                />
                  <img
                    className="d-block w-100"
                    src={hotel}
                    alt="First slide"
                  />
                </span>
              </div>
              <div className='cardImage_content'>
                  <span>Jersery City</span>
                  <p>25 Listing</p>
                </div> 
            </a>
            ))}
          </div>
        </div>
      </div>
      <div className='propertyWhiteBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Property for Rent</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
            {[...Array(3)].map((item) => (
              <FeatureCard />
            ))}
          </div>
        </div>
      </div>
      <div className='propertyWhiteBg lighBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Property for Sale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
            {[...Array(3)].map((item) => (
              <FeatureCard />
            ))}
          </div>
        </div>
      </div>
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
      <div className='container partnerRealcity'>
        <Partner />
      </div>
    </>
  );
}
export default HomePage;