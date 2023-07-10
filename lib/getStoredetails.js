export const getStoredetails=async (origin)=>{
   // const res=await fetch(`${origin}/api/store`,{next:{revalidate:60}});
   // const data=await res.json();
   // return data;
   try {
      const res=await fetch(`${origin}/api/store`,{next:{revalidate:60}});

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}