export const getStoredetails=async ()=>{
   const res=await fetch(`${process.env.BASE_URL}api/store`,{next:{revalidate:60}});
   const data=await res.json();
   return data;
}