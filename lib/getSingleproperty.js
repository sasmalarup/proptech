export async function getSingleproperty(origin,slug,ap){
    try {
        //console.log(`${process.env.BASE_URL}api/property?slug=${slug}&ap=${ap}`)
        const res = await fetch(`${origin}/api/property?slug=${slug}&ap=${ap}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}