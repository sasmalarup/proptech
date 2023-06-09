export async function getCMSList(origin,ap,seller_id) {
    try {
        const res=await fetch(`${origin}/api/cms?ap=${ap}&seller_id=${seller_id}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

  export async function getCMSDetails(origin,ap,seller_id,slug) {
    try {
        const res=await fetch(`${origin}/api/cms?ap=${ap}&seller_id=${seller_id}&slug=${slug}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  