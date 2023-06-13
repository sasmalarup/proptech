import Home from '../component/Pages/HomePage'
import {getStoredetails} from '../lib/getStoredetails'


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
export default async function Landingpage() { 
  const storeDetails=await getStoredetails();
  return (
    <>
   
      <Home id={storeDetails[0].id}/>
     
    </>
      
  )
}
