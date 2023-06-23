export async function getcatsearchProperty(level_id,seller_id,cslug,ap,subtype,province,city,barangay){
    try {
      //console.log(`${process.env.BASE_URL}api/searchproperty?level_id=${level_id}&seller_id=${seller_id}&cslug=${cslug}&ap=${ap}&subtype=${subtype}&province=${province}&city=${city}&barangay=${barangay}`)
        const res = await fetch(`${process.env.BASE_URL}api/searchproperty?level_id=${level_id}&seller_id=${seller_id}&cslug=${cslug}&ap=${ap}&subtype=${subtype}&province=${province}&city=${city}&barangay=${barangay}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}