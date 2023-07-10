export async function getpropertyCategory(origin,levelid,ap) {
    try {
      //console.log(typeof levelid)
      let apipath;
      if(typeof levelid == "number"){//alid integer (positive or negative)
        apipath=`${origin}/api/homesettings?ap=${ap}&levelid=${levelid}`
        
      }else{
        apipath=`${origin}/api/homesettings?ap=${ap}&slug=${levelid}`
        
      }
      
      const res=await fetch(apipath,{next:{revalidate:60}})
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  