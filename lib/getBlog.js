export async function getBlog(storeid,numofrecords,ap) {
    try {
      const res = await fetch(`${process.env.BASE_URL}api/blog?storeid=${storeid}&ap=${ap}&numofrecords=${numofrecords}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  