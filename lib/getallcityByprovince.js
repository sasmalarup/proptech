export async function getallcityByprovince(origin,provId,ap) {
    try {
        const res=await fetch(`${origin}/api/homesettings?ap=${ap}&provid=${provId}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  