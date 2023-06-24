import Details from '@/component/Pages/DetailsPage'
import { getSingleproperty } from '@/lib/getSingleproperty'
import React from 'react'
export async function generateMetadata({params}){
    
    const res=await getSingleproperty(params.slug,'sp')

    return {
      title: res[0]?.title, 
      description: res[0]?.title,
      icons: {
        icon: '/images/check.png',
      }
    }
  }
const Propertydetails = async ({params}) => {
    const res=await getSingleproperty(params.slug,'sp')
    //console.log("res",params.slug)
  return (
    <Details data={res}/>
  )
}

export default Propertydetails
