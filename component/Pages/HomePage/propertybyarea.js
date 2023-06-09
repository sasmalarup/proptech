"use client";
import {useState,useEffect} from 'react'
import Image from 'next/image';
import hotel from'../../../public/images/propertyHotel.jpeg';
import PropertySkeleton from '@/component/molecules/Skeleton/PropertySkeleton';
import { useSelector } from 'react-redux';
import { getProperty } from '@/lib/getProperty';
const Propertybyarea = ({origin}) => {
    const [propertybyarea,setPropbyarea]=useState([]);
    const [isLoading,setLoading]=useState(false)
    const seller_id=useSelector(state=>state.globalReducer.value.storeID)
    useEffect(()=>{
       const propertycityRes=async ()=>{
           setLoading(true)
           const res=await getProperty(origin,seller_id,0,'plbyc');
           setPropbyarea(res)
           setLoading(false)
       }
       propertycityRes()
    },[seller_id])
    
    return (
        <>
            <div className='propertyArea'>
                <div className="container mt-5 mb-5 propertyAreaContainer">
                    <div className='featureTitle'>
                        <h2 className='mb-4'>Property by area</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                    <div className='propertyArea_box'>
                                { 
                                    isLoading ?                                    
                                   
                                        [...Array(3)].map((x,i)=><PropertySkeleton key={i} />)                                   
                                    
                                    :
                                    propertybyarea.length>0 && propertybyarea.map(itm=>
                                            <a href="#" className="col-md-3 col-xs-12 propertyAreaCard" key={itm.cid}>
                                                <div className='cardimage'>
                                                    <span>
                                                        <Image
                                                            src={hotel}
                                                            width='75'
                                                            height='75'
                                                            alt={itm.cname}                                                
                                                        />
                                                    
                                                    </span>
                                                </div>
                                                <div className='cardImage_content'>
                                                    <span>{itm.cname}</span>
                                                    <p>{itm.total_no_of_property} Listing</p>
                                                </div>
                                            </a>
                                        )
                                }                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Propertybyarea
