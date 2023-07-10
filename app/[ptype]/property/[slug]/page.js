import CategoryPage from "@/component/Pages/CategoryDetaisPage" 
import React from 'react'
import {getStoredetails} from '../../../../lib/getStoredetails'
import { headers } from 'next/headers';

export async function generateMetadata(){
  const headersList = headers();
  const storeDetails=await getStoredetails(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`);
    return {
      title:storeDetails[0].page_title, 
      description:storeDetails[0].meta_desc,
      icons: {
        icon: '/images/check.png',
      }
    }
  }
const Propertylist = ({params}) => {
  const headersList = headers();
  params.origin=`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`;
  return (
    <>
      <CategoryPage origin={params.origin}/>
      
    </>
  )
}

export default Propertylist
