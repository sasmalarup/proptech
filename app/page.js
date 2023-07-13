import { getStoredetails } from '@/lib/getStoredetails';
import Home from '../component/Pages/HomePage'
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
export default async function Landingpage({params}) { 
  const headersList = headers();
  params.origin=`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}`;
 //console.log("anup",params.origin)
  
  return (
      <Home origin={params.origin}/>
  )
}
