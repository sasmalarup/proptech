import Home from "@/component/Pages/HomePage"
// export const metadata = {
//   title: 'Realcity',
//   description: 'RealCity is the best restaurant website',
// };
export async function generateMetadata(){
  const storeDetails=await fetch(`${process.env.BASE_URL}api/store`,{next:{revalidate:60}}).then((res)=>res.json());
  return {
    title:storeDetails[0].page_title, 
    description:storeDetails[0].meta_desc
  }
}
export default function Landingpage() {
  return (
    <>
      <Home />
    </>
      
  )
}