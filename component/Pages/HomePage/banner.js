"use client";
import React, { useEffect, useState } from 'react';
//import banner from'../../../public/images/banner-image.jpeg';
import Image from 'next/image';
import './styles.scss';
//import { getGlobalstate } from "@/redux/features/globalSlice";
import { useSelector } from "react-redux";
import { gethomeBanner } from '@/lib/gethomeBanner';

async function HomeBanner() {
  const storeid=useSelector(state=>state.globalReducer.value.storeID);
  const data=await gethomeBanner(storeid,'Banner');
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {
            data?.length>0 && data.map((itm,index)=>{
              const active=index===0?'active':'';
              return  <div className={`carousel-item ${active}`} key={itm.id}>
              <Image
                src={`https://www.rephil.app/img/b/hsb/s/1440/432/${itm.img_path}`}
                width={1440}
                height={432}
                alt={itm.alt_txt}
              />
            </div>
            }) 
          }
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