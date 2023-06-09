import React from 'react';
import banner from'../../../public/images/banner-image.jpeg';
import Image from 'next/image';
import './styles.scss';

function HomeBanner() {
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
    </>
  );
}
export default HomeBanner;