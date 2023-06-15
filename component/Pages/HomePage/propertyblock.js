"use client";
import React,{useEffect, useState} from 'react'
import AssetsCard from '@/component/molecules/Card'
import { getProperty } from '@/lib/getProperty';
import { useSelector } from 'react-redux';
const Propertyblock = () => {
  const [blockp,setBlockp]=useState([]);
  const [isLoading,setLoading]=useState(false)
  const seller_id=useSelector(state=>state.globalReducer.value.storeID)
  useEffect(()=>{
     const propertyRes=async ()=>{
         setLoading(true)
         const res=await getProperty(seller_id,3);
         setBlockp(res)
         setLoading(false)
     }
     propertyRes()
  },[])
  console.log("blockp",blockp)
  return (
    <div className='container mt-5 mb-5'>
          <div className='row gy-1'>
              <div className='featureTitle'>
                  <h2>Our Feature Exclusive</h2>
                  <p>Lorem Ipsum is simply dume text please change this description</p>
              </div>
              { 
              isLoading ? 
              <p>Loading please wait...</p> :
              blockp.map(itm=><AssetsCard itm={itm}/>)
            }
          </div>
      </div>
  )
}

export default Propertyblock
