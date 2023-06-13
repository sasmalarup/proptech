export const getpropertyParentlevel=async (ap)=>{
    const res=await fetch(`${process.env.BASE_URL}api/homesettings?ap=${ap}`,{next:{revalidate:60}})
    const data=res.json();
    return data;
}