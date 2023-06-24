import Details from '@/component/Pages/DetailsPage'
import { getSingleproperty } from '@/lib/getSingleproperty'
import React from 'react'
export async function generateMetadata({params}){
    
    const res=await getSingleproperty(params.slug,'sp')
    
    return {
      title:"this is property", 
      description:"this is description",
      icons: {
        icon: '/images/check.png',
      }
    }
  }
const Propertydetails = () => {
  return (
    <Details />
  )
}

export default Propertydetails
