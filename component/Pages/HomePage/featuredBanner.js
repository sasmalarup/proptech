"use client";
import React from 'react';
import banner from'../../../public/images/featured-banner.jpg';
import banner2 from '../../../public/images/featured-banner-gray.jpg';
import Image from 'next/image';

function FeaturedBanner() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='bannerArea'>
                <div className='featureTitle'>
                    <h2>Our Featured Project</h2>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image
                                src={banner}
                                width={1200}
                                height={400}
                                alt='BannerName1'
                            />
                        </div>
                        <div className="carousel-item">
                            <Image
                            src={banner2}
                                width={1200}
                                height={400}
                                alt="BannerName"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default FeaturedBanner;