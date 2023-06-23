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
    const [filterinfo,setFilter]=useState({
        subtype: 0,
        province: 0,
        city: 0,
        barangay: 0

    })
    const [ptypeID,setPtypeid]=useState("")
    const [searchinfo, setSearchInfo] = useState({
        province: [],
        cities: [],
        barangay: []
      });
    const qsearchparams=useSearchParams()
    const params = useParams()
    const router=useRouter()
    const pathname = usePathname();
    const seller_id=useSelector(state=>state.globalReducer.value.storeID)
  useEffect(()=>{
    const fetchData = async () => {
        const res = await getpropertyCategory(params.slug, 'clevel');
        const fres=res.filter(itm=>itm.level_id==params.ptype)
        setPtypeid(fres[0].id)
    };

    fetchData(); 
     const searchRes=async ()=>{
         
         const res=await getcatsearchProperty(params.ptype,seller_id,params.slug,'pl');
         setSearchres(res)
        
     }
     searchRes()
  },[seller_id]) 
  useEffect(()=>{
    const subcatFunc=async (ptypeID)=>{
        const res=await getpropertySubcategory(params.ptype,ptypeID,'sclevel')
        res.sort(dynamicSort("sub_category_name"))
        setSubcatres(res)

        const provinceres = await getallProvince('prov');
        provinceres.sort(dynamicSort("province_name"))
        setSearchInfo({...searchinfo,province: [...provinceres]})
        

    }
   subcatFunc(ptypeID)
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
  //console.log("qsearchparams",atob(qsearchparams.get('subtype')))
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
                                        subcatres?.length>0 && subcatres.map(itm=>(
                                       
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
                                        searchinfo?.province?.length>0 && searchinfo.province.map(value=>(
                                            
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
                                        searchinfo?.cities?.length>0 && searchinfo.cities.map(value=>(
                                           
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
                                        searchinfo?.barangay?.length>0 && searchinfo.barangay.map(value=>(
                                            
                                            <option key={value.municipality_id} value={value.municipality_id}>{value.municipality_name}</option>

                                        ))
                                    }
                        
                    </select>
                    <label htmlFor="floatingSelect">Barangay</label>
                </div>

                {/* <div className="leftlistItemBox">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Property Sub Type
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {
                                        subcatres?.length>0 && subcatres.map(itm=>(
                                        <div className="form-group checkCustom" key={itm.id}>
                                        <input type="checkbox" value={itm.id} id={itm.sub_category_name} onChange={subtypeHandler}/>
                                        <label htmlFor={itm.sub_category_name}>{itm.sub_category_name}</label>
                                    </div>
                                    ))
                                    }
                                    
                                    
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    Province
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {
                                        searchinfo?.province?.length>0 && searchinfo.province.map(value=>(
                                            <div className="form-group checkCustom" key={value.province_id}>
                                            <input type="checkbox" value={value.province_id} id={value.province_name} onChange={provinceHandler}/>
                                            <label htmlFor={value.province_name}>{value.province_name}</label>
                                            </div>

                                        ))

                                    }

                                    
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    City/Muncipality
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {
                                        searchinfo?.cities?.length>0 && searchinfo.cities.map(value=>(
                                            <div className="form-group checkCustom" key={value.cid}>
                                               <input type="checkbox" value={value.cid} id={value.city_name} onChange={cityHandler}/>
                                               <label htmlFor={value.city_name}>{value.city_name}</label>
                                            </div>

                                        ))
                                    }

                                    
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#barnagay">
                                    Barangay
                                </button>
                                </h2>
                                <div id="barnagay" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                {
                                        searchinfo?.barangay?.length>0 && searchinfo.barangay.map(value=>(
                                            <div className="form-group checkCustom" key={value.municipality_id}>
                                               <input type="checkbox" value={value.municipality_id} id={value.municipality_name} onChange={barangayHandler}/>
                                               <label htmlFor={value.municipality_name}>{value.municipality_name}</label>
                                            </div>

                                        ))
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    
                </div> */}
            </div>
            <div className="col-md-9 rightContainer category_list">
                <h1 className='pl10'>Find Property</h1>
                 {
                    sercres?.length>0 && sercres.map((itm)=><FeatureCard itm={itm}/>)
                }
               
            </div>
        </div>
       </div>
    </>
  );
}

export default CategoryPage;
