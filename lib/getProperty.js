export async function getProperty(seller_id,numofrecords){
    try {
        const res = await fetch(`${process.env.BASE_URL}api/property?seller_id=${seller_id}&numofrecords=${numofrecords}`,{next:{revalidate:60}});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json(); 
    } catch (err) {
        console.log(err);
    }
}