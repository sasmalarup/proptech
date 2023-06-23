"use client";
import React,{useState,useEffect} from 'react';
//import banner from'../../../public/images/featured-banner.jpg';
//import banner2 from '../../../public/images/featured-banner-gray.jpg';
import Image from 'next/image';
import { useSelector } from "react-redux";
import { gethomeBanner } from '@/lib/gethomeBanner';
import SkeletonBanner from '@/component/molecules/Skeleton/BannerSkeleton';
function FeaturedBanner() {
  const storeid=useSelector(state=>state.globalReducer.value.storeID);
  const [data,setData]=useState([])
  const [isloading,setLoading]=useState(false)
  useEffect( ()=>{
   const homepf=async ()=>{
    setLoading(true)
    const res = await gethomeBanner(storeid,'HomeBanner');
    setData(res)
    setLoading(false)
   }
   homepf()
  },[storeid])
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
                                                  src={`${process.env.IMG_URL}${process.env.HOME_FEATURE_BANNER_IMG_URL}${itm.img_path}`}
                                                  width={1200}
                                                  height={411}
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
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default FeaturedBanner;