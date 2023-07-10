import React from "react"
import BlogDetailsPage from "@/component/Pages/BlogDetailsPage"
import { getSingleblog } from "@/lib/getSingleblog"
import { headers } from 'next/headers';

export async function generateMetadata({params}){
  const headersList = headers();  
  const res=await getSingleblog(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`,params.slug,'sb')

  return {
    title: res[0]?.page_title, 
    description: res[0]?.meta_desc,
    icons: {
      icon: '/images/check.png',
    }
  }
}

export default async function blogDetials({params}) {
  const headersList = headers();
  const res=await getSingleblog(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`,params.slug,'sb')
  return (
      <BlogDetailsPage data={res[0]}/>
  )
}
