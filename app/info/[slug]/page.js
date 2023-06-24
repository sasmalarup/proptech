import CmsPage from '@/component/Pages/CmsPage'
import React from 'react'
import { getStoredetails } from "@/lib/getStoredetails";
import { getCMSDetails } from "@/lib/getCMSList"


export async function generateMetadata(){
  const storeDetails=await getStoredetails();   
  const cmsinfo = await getCMSDetails('cmsdetails',storeDetails[0].id,'about-us') 

  return {
    title:cmsinfo[0].page_title, 
    description:cmsinfo[0].meta_desc
  }

}

export default function cms() {
  return (
    <>
        <CmsPage />
    </>
  )
}
