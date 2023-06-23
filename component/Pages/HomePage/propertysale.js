import React,{useState,useEffect} from 'react'
import FeatureCard from '../../molecules/featureCard/index';
import { getProperty } from '@/lib/getProperty';
import { useSelector } from 'react-redux';
import CardSkeleton from '@/component/molecules/Skeleton/CardSkelton';
const Propertysale = () => {
     const [salep,setSale]=useState([]);
     const [isLoading,setLoading]=useState(false)
     const seller_id=useSelector(state=>state.globalReducer.value.storeID)
  useEffect(()=>{
     const propertyRes=async ()=>{
         setLoading(true)
         const res=await getProperty(seller_id,3,'pl',5);
         setSale(res)
         setLoading(false)
     }
     propertyRes()
  },[seller_id]) 
  return (
    <>
     <div className='propertyWhiteBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Property for Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
          { 
              isLoading ? 
              <>
              {
                [...Array(3)].map((i)=><CardSkeleton/>)
              }
              </>
               :
               salep?.length>0 && salep.map((itm,i)=><FeatureCard itm={itm}/>)
            }
           
          </div>
        </div>
      </div> 
    </>
  )
}

export default Propertysale
