"use client";
import React, { useEffect, useState } from 'react';
import banner from'../../../public/images/banner-image.jpeg';
import Image from 'next/image';
import './styles.scss';
import { getGlobalstate } from "@/redux/features/globalSlice";
import { useSelector } from "react-redux";
import { gethomeBanner } from '@/lib/gethomeBanner';


async function HomeBanner() {
  const storeid=useSelector(state=>state.globalReducer.value.storeID);
  const data=await gethomeBanner(storeid,'Banner');
  //const [data, setData] = useState([])
  // useEffect(()=>{
  //   try {
  //     fetch(`${process.env.BASE_URL}api/homesettings?storeid=${storeid}&ap=Banner`,{next:{revalidate:60}})
  //     .then((res)=>res.json()).then((data) => {
  //       setData(data)
  //     })
  //   } catch (error) {
  //      throw new Error("Error from getbanner")
  //   }
   
  // },[])
  //if (isLoading) return <p>Loading...</p>
  //if (!data) return <p>No profile data</p>
  //console.log("banner data",data)
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
         
          {/* <div className="carousel-item" style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src={banner}
              width='100px'
              height='100px'
              alt="Picture of the author"
            />
          </div> */}
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