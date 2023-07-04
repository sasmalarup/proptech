import CategoryPage from "@/component/Pages/CategoryDetaisPage" 
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
  return (
    <>
      <CategoryPage />
      
    </>
  )
}

export default Propertylist
