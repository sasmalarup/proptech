import React from 'react';
import Image from 'next/image';
import hotel from'../../../public/images/propertyHotel.jpeg';
import banner from'../../../public/images/banner-image.jpeg';
import HomeTabs from './tabs';
import InqueryCard from './inqueryForm';
import AssetsCard from '../../molecules/Card';
import FeatureCard from '../../molecules/featureCard/index';
import BenifitsCard from '../../molecules/benifitsCard/index';
import BlogCard from '../../molecules/blogCard/index';
import TestimonialsCard from '../../molecules/testimonialsCard/index';
import Partner from './partner';

import './styles.scss';

function HomePage() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src={banner}
              width='100px'
              height='100px'
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={banner}
              width='100px'
              height='100px'
              alt="Picture of the author"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <HomeTabs/>
      <div className='container mt-5 mb-5'>
          <div className='row gy-1'>
              <div className='featureTitle'>
                  <h2>Our Feature Exclusive</h2>
                  <p>Lorem Ipsum is simply dume text please change this description</p>
              </div>
              {[...Array(3).keys()].map((item) => (
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
          {[...Array(12).keys()].map((item) => (
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
            {[...Array(3).keys()].map((item) => (
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
            {[...Array(3).keys()].map((item) => (
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
            {[...Array(3).keys()].map((item) => (
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