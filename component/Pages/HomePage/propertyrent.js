import React,{useState,useEffect} from 'react'
import FeatureCard from '../../molecules/featureCard/index';
import { getProperty } from '@/lib/getProperty';
import { useSelector } from 'react-redux';
import CardSkeleton from '@/component/molecules/Skeleton/CardSkelton';
const Propertyrent = () => {
     const [rentp,setRent]=useState([]);
     const [isLoading,setLoading]=useState(false)
     const seller_id=useSelector(state=>state.globalReducer.value.storeID)
  useEffect(()=>{
     const propertyRes=async ()=>{
         setLoading(true)
         const res=await getProperty(seller_id,3,'pl',28);
         setRent(res)
         setLoading(false)
     }
     propertyRes()
  },[seller_id]) 
  //console.log(rentp)
  return (
    <>
     <div className='propertyWhiteBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Property for Rent</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
             { 
                isLoading ? 
                
                  [...Array(3)].map((v,i)=><CardSkeleton key={i} />)             
                  :
                  rentp.length>0 && rentp.map((itm,i)=><FeatureCard itm={itm} key={i} />)
              }
           
          </div>
        </div>
      </div> 
    </>
  )
}

export default Propertyrent
