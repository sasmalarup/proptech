import Category from '@/app/category/page'
import React from 'react'
import {getStoredetails} from '../../../../lib/getStoredetails'
export async function generateMetadata(){
    const storeDetails=await getStoredetails();
    return {
      title:storeDetails[0].page_title, 
      description:storeDetails[0].meta_desc,
      icons: {
        icon: '/images/check.png',
      }
    }
  }
const Propertylist = () => {
    //const searchParams = useSearchParams();
    //console.log("sparam",searchParams.get('page'))
   // console.log("slug",params.slug)
  return (
    <>
      <Category  />
      
    </>
  )
}

export default Propertylist
