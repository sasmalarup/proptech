export async function getBlog(origin,storeid,numofrecords,ap) {
    try {
      const res = await fetch(`${origin}/api/blog?storeid=${storeid}&ap=${ap}&numofrecords=${numofrecords}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  