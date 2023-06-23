export async function getBarangay(provid,cityid,ap) {
    try {
        const res=await fetch(`${process.env.BASE_URL}api/homesettings?ap=${ap}&provid=${provid}&cityid=${cityid}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  