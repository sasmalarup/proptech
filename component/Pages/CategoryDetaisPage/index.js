"use client"
import React,{useState,useEffect} from 'react'
import FeatureCard from "@/component/molecules/featureCard"; 
import './styles.scss';
import { useSelector } from 'react-redux';
import { useSearchParams,useParams,useRouter,usePathname } from 'next/navigation';
import { getcatsearchProperty } from '@/lib/getcatsearchProperty';
import { getpropertyCategory } from '@/lib/getpropertyCategory';
import { getpropertySubcategory } from '@/lib/getpropertySubcategory';
import { dynamicSort } from '@/utils/arrayobjectsort';
import { getallProvince } from '@/lib/getallProvince';
import { getallcityByprovince } from '@/lib/getallcityByprovince';
import { getBarangay } from '@/lib/getBarangay';



function CategoryPage() {
    const [sercres,setSearchres]=useState([]);
    const [subcatres,setSubcatres]=useState([]);
    const qsearchparams=useSearchParams()
    const params = useParams()
    const router=useRouter()
    const pathname = usePathname();
    const seller_id=useSelector(state=>state.globalReducer.value.storeID)
    const [ptypeID,setPtypeid]=useState("")
    const [searchinfo, setSearchInfo] = useState({
        province: [],
        cities: [],
        barangay: []
      });
      let subtype=qsearchparams.get('subtype')!=null?atob(qsearchparams.get('subtype')):0
      let province=qsearchparams.get('province')!=null?atob(qsearchparams.get('province')):0
      let city=qsearchparams.get('city')!=null?atob(qsearchparams.get('city')):0
      let barangay=qsearchparams.get('barangay')!=null?atob(qsearchparams.get('barangay')):0
    const [filterinfo,setFilter]=useState({
        subtype,
        province,
        city,
        barangay

    })
    
   
   

  useEffect(()=>{
    const subcatFunc=async (ptypeID)=>{
        const res=await getpropertySubcategory(params.ptype,ptypeID,'sclevel')
        res.sort(dynamicSort("sub_category_name"))
        setSubcatres(res)

        const provinceres = await getallProvince('prov');
        provinceres.sort(dynamicSort("province_name"))
        setSearchInfo({...searchinfo,province: [...provinceres]})
        

    }
    if(ptypeID>0){
        //console.log("ptypeID",ptypeID)
        subcatFunc(ptypeID)
    }
   
  },[ptypeID])
  const provinceHandler = async (provid) => {
    const { cities } = searchinfo;
    const res=await getallcityByprovince(provid,'city')
    setSearchInfo({...searchinfo,cities: [...res]})
    if(provid>0){
        setFilter({...filterinfo,province: parseInt(provid)})
    }else{
        setFilter({...filterinfo,province: parseInt(0),city: parseInt(0), barangay: parseInt(0)})
    }
    
    
  }

  const cityHandler =  async (cid) => {
    const { barangay } = searchinfo;
    const { province } = filterinfo;
    const res=await getBarangay(province,cid,'barangay')
    setSearchInfo({...searchinfo,barangay: [...res]})
    if(cid>0){
        setFilter({...filterinfo,city: parseInt(cid)})
    }else{
        setFilter({...filterinfo,city: parseInt(0), barangay: parseInt(0)})
    }
    
  }
  const barangayHandler =  (barangayid) => {
    const { province,city } = filterinfo;
    if(barangayid>0){
        setFilter({...filterinfo,barangay: parseInt(barangayid)})
    }else{
        setFilter({...filterinfo, barangay: parseInt(0)})
    }
    
  }
  const subtypeHandler =  (subtypeid) => {
    setFilter({...filterinfo,subtype: parseInt(subtypeid)})
  }
  
  useEffect(()=>{
    let searchstring=[]
    if(filterinfo.subtype>0 || filterinfo.province>0 || filterinfo.city>0 || filterinfo.barangay>0){
        
        if(filterinfo.subtype>0){
            searchstring.push(`subtype=${btoa(filterinfo.subtype)}`)
        }
        if(filterinfo.province>0){
            searchstring.push(`province=${btoa(filterinfo.province)}`)
        }
        if(filterinfo.province>0 && filterinfo.city>0){
            searchstring.push(`city=${btoa(filterinfo.city)}`)
        }
        if(filterinfo.province>0 && filterinfo.city>0 && filterinfo.barangay>0){
            searchstring.push(`barangay=${btoa(filterinfo.barangay)}`)
        }
        
        

    }
    searchstring?.length>0 ? router.push(`${pathname}?${searchstring.join("&")}`) : router.push(`${pathname}`)
    
  },[filterinfo])
  useEffect(()=>{
    
    const fetchData = async () => {
        const res = await getpropertyCategory(params.slug, 'clevel');
        const fres=res.filter(itm=>itm.level_id==params.ptype)
        setPtypeid(fres[0].id)
    };

    fetchData(); 
    const searchRes=async ()=>{
        
        const res=await getcatsearchProperty(params.ptype,seller_id,params.slug,'pl',subtype,province,city,barangay);
        setSearchres(res)
       
    }
    if(seller_id>0 || subtype>0 || province>0 || city>0 || barangay>0){
        searchRes()
    }
     
  },[seller_id,subtype,province,city,barangay]) 
  //console.log("qsearchparams",qsearchparams.get('subtype'),atob(qsearchparams.get('subtype')))
  //console.log("filterinfo",filterinfo)
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container-fluid categoryWraper">
            <div className="col-md-3 leftlistItem">
                <h1>Filter Property</h1>
                <div className="form-floating optionField">
                    <select
                        className="form-select"
                        value={filterinfo.subtype}
                        onChange={e=>subtypeHandler(e.target.value)}
                    >
                        <option value="0">Choose Type</option>
                        {
                                        subcatres.length>0 && subcatres.map(itm=>(
                                       
                                    <option key={itm.id} value={itm.id}>{itm.sub_category_name}</option>
                                    ))
                                    }
                        
                        
                    </select>
                    <label htmlFor="floatingSelect">Property Sub Type</label>
                </div>
                <div className="form-floating optionField">
                    <select
                        className="form-select"
                        value={filterinfo.province}
                        onChange={e=>provinceHandler(e.target.value)}
                    >
                        <option value="0">Choose Province</option>
                        {
                                        searchinfo.province.length>0 && searchinfo.province.map(value=>(
                                            
                                            <option key={value.province_id} value={value.province_id}>{value.province_name}</option>

                                        ))

                                    }
                       
                    </select>
                    <label htmlFor="floatingSelect">Province</label>
                </div>
                <div className="form-floating optionField">
                    <select
                        className="form-select"
                        value={filterinfo.city}
                        onChange={e=>cityHandler(e.target.value)}
                    >
                        <option value="0">Choose City/Muncipality</option>
                        {
                                        searchinfo.cities.length>0 && searchinfo.cities.map(value=>(
                                           
                                            <option value={value.cid} key={value.cid}>{value.city_name}</option>

                                        ))
                                    }
                        
                    </select>
                    <label htmlFor="floatingSelect">City and Muncipality</label>
                </div>
                <div className="form-floating optionField">
                    <select
                        className="form-select"
                        value={filterinfo.barangay}
                        onChange={e=>barangayHandler(e.target.value)}
                    >
                        <option value="0">Choose Barangay</option>
                        {
                                        searchinfo.barangay.length>0 && searchinfo.barangay.map(value=>(
                                            
                                            <option key={value.municipality_id} value={value.municipality_id}>{value.municipality_name}</option>

                                        ))
                                    }
                        
                    </select>
                    <label htmlFor="floatingSelect">Barangay</label>
                </div>

                
            </div>
            <div className="col-md-9 rightContainer category_list">
                <h1 className='pl10'>Find Property</h1>
                 {
                    sercres.length>0 && sercres.map((itm,i)=><FeatureCard itm={itm} key={i}/>)
                }
               
            </div>
        </div>
       </div>
    </>
  );
}

export default CategoryPage;
