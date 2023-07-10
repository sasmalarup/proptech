import Details from '@/component/Pages/DetailsPage'
import React from 'react'
import { headers } from 'next/headers';
import { getSingleproperty } from '@/lib/getSingleproperty'

export async function generateMetadata({params}){
    const headersList = headers();
    const res=await getSingleproperty(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`,params.slug,'sp')

    return {
      title: res[0]?.title, 
      description: res[0]?.title,
      icons: {
        icon: '/images/check.png',
      }
    }
  }
  export default async function Propertydetails({params}){
    const headersList = headers();
    const res=await getSingleproperty(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`,params.slug,'sp')
  return (
    <Details data={res[0]}/>
  )
}


