export async function getCMSList(ap,seller_id) {
    try {
        const res=await fetch(`${process.env.BASE_URL}api/cms?ap=${ap}&seller_id=${seller_id}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  