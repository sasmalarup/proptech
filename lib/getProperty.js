export async function getProperty(origin,seller_id,numofrecords=0,ap,rent_or_sell_id=0){
    try {
        const res = await fetch(`${origin}/api/property?seller_id=${seller_id}&numofrecords=${numofrecords}&ap=${ap}&rent_or_sell_id=${rent_or_sell_id}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}