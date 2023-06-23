export async function getcatsearchProperty(level_id,seller_id,cslug,ap){
    try {
        const res = await fetch(`${process.env.BASE_URL}api/searchproperty?level_id=${level_id}&seller_id=${seller_id}&cslug=${cslug}&ap=${ap}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}