export async function getpropertyParentlevel(origin,ap) {
    try {
        const res=await fetch(`${origin}/api/homesettings?ap=${ap}`,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  