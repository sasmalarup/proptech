export async function getSingleblog(origin,slug,ap){
    try {
        const res = await fetch(`${origin}/api/blog?slug=${slug}&ap=${ap}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}