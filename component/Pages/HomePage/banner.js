"use client";
import React, { useState,useEffect } from 'react';
//import banner from'../../../public/images/elms-hero.jpeg';
import Image from 'next/image';
import './styles.scss';
import { useSelector } from "react-redux";
import { gethomeBanner } from '@/lib/gethomeBanner';
import SkeletonBanner from '@/component/molecules/Skeleton/BannerSkeleton';

function HomeBanner() {
  const storeid=useSelector(state=>state.globalReducer.value.storeID);
  const [data,setData]=useState([])
  const [isloading,setLoading]=useState(false)
  useEffect( ()=>{
   const homep=async ()=>{
    setLoading(true)
    const res = await gethomeBanner(storeid,'Banner');
    setData(res)
    setLoading(false)
   }
   homep()
  },[])
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
        {
                          isloading ?
                            (
                              <SkeletonBanner />
                            ) :

                            (
                              <>
                                {
                                  data?.length>0 && data.map((itm, i) => {
                                    return (
                                      <div className={`carousel-item ${i===0?'active':""}`} key={itm.id}>
                                                <Image
                                                  src={`${process.env.IMG_URL}${process.env.HOME_BANNER_IMG_URL}${itm.img_path}`}
                                                  width={1440}
                                                  height={432}
                                                  alt={itm.alt_txt}
                                                />
                                              </div>
                                    );
                                  })
                                }
                              </>


                            )

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