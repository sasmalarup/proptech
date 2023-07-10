export async function getBarangay(origin,provid,cityid,ap) {
    try {
        const res=await fetch(`${origin}/api/homesettings?ap=${ap}&provid=${provid}&cityid=${cityid}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  