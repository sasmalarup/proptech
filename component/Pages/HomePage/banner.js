"use client";
import React, { useState } from 'react';
import banner from'../../../public/images/banner-image.jpeg';
import Image from 'next/image';
import './styles.scss';
import { useSelector } from "react-redux";
import { gethomeBanner } from '@/lib/gethomeBanner';

function HomeBanner() {
  const storeid=useSelector(state=>state.globalReducer.value.storeID);
  const [data,setData]=useState([])
  const fetchData = async () => {
    const res = await gethomeBanner(storeid,'Banner');
    setData(res)
    //console.log(data);
  };

  fetchData();
  let bannerHtml = data?.length>0 && data.map((itm, index) => {

    if (index === 0) {
      return <div className="carousel-item active" key={itm.id}>
      <Image
        src={`https://www.rephil.app/img/b/hsb/s/1440/432/${itm.img_path}`}
        width={1440}
        height={432}
        alt={itm.alt_txt}
      />
    </div>;
    }
    return <div className="carousel-item" key={itm.id}>
    <Image
      src={`https://www.rephil.app/img/b/hsb/s/1440/432/${itm.img_path}`}
      width={1440}
      height={432}
      alt={itm.alt_txt}
    />
  </div>;
  });
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {bannerHtml}
          
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