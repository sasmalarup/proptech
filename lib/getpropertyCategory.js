export const getpropertyCategory=async (levelid,ap)=>{
    const res=await fetch(`${process.env.BASE_URL}api/homesettings?ap=${ap}&levelid=${levelid}`,{next:{revalidate:60}})
    const data=res.json();
    return data;
}