export async function getpropertySubcategory(origin,level_id,cid,ap){
    try {
      //console.log(`${process.env.BASE_URL}api/homesettings?level_id=${level_id}&cid=${cid}&ap=${ap}`)
        const res = await fetch(`${origin}/api/homesettings?level_id=${level_id}&cid=${cid}&ap=${ap}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}