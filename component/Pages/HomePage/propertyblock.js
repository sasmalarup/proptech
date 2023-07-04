"use client";
import React,{useEffect, useState} from 'react'
import AssetsCard from '@/component/molecules/Card'
import { getProperty } from '@/lib/getProperty';
import { useSelector } from 'react-redux';
//import PropertySkeleton from '@/component/molecules/Skeleton/PropertySkeleton';
import CardSkeleton from '@/component/molecules/Skeleton/CardSkelton';
const Propertyblock = () => {
  const [blockp,setBlockp]=useState([]);
  const [isLoading,setLoading]=useState(false)
  const seller_id=useSelector(state=>state.globalReducer.value.storeID)
  useEffect(()=>{
     const propertyRes=async ()=>{
         setLoading(true)
         const res=await getProperty(seller_id,3,'pl',0);
         setBlockp(res)
         setLoading(false)
     }
     propertyRes()
  },[seller_id])
  //console.log("blockp",blockp)
  return (
    <div className='container mt-5 mb-5'>
          <div className='row gy-1'>
              <div className='featureTitle'>
                  <h2>Our Feature Exclusive</h2>
                  <p>Lorem Ipsum is simply dume text please change this description</p>
              </div>
              { 
              isLoading ? 
              
                [...Array(3)].map((v,i)=><CardSkeleton key={i} />)
             
               :
              blockp.length>0 && blockp.map((itm,i)=><AssetsCard key={i} itm={itm}/>)
            }
          </div>
      </div>
  )
}

export default Propertyblock
