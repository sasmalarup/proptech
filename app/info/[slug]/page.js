import CmsPage from '@/component/Pages/CmsPage'
import React from 'react'
import { getStoredetails } from "@/lib/getStoredetails";
import { getCMSDetails } from "@/lib/getCMSList"
import { headers } from 'next/headers';

export async function generateMetadata(){
  const headersList = headers();
  const storeDetails=await getStoredetails(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`); 
  const cmsinfo = await getCMSDetails(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`,'cmsdetails',storeDetails[0].id,'about-us') 

  return {
    title:cmsinfo[0].page_title, 
    description:cmsinfo[0].meta_desc
  }

}

export default function cms({params}) {
  const headersList = headers();
  params.origin=`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`
  return (
    <>
        <CmsPage origin={params.origin}/>
    </>
  )
}
