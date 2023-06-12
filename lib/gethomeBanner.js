export const gethomeBanner=async (storeid,ap)=>{
    const res= fetch(`${process.env.BASE_URL}api/homesettings?storeid=${storeid}&ap=${ap}`,{next:{revalidate:60}})
    const data=(await res).json();
    return data;

}