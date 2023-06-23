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
        fsubtype: [],
        fprovince: [],
        fcity: [],
        fbarangay: []

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
  const provinceHandler = async (e) => {
    const { value, checked } = e.target;
    const { cities } = searchinfo;
    const { fprovince } = filterinfo;
    if(checked){
        const res=await getallcityByprovince(value,'city')
        setSearchInfo({...searchinfo,cities: [...cities,...res]})
        setFilter({...filterinfo,fprovince: [...fprovince,value]})
    }else{
        setSearchInfo({
            ...searchinfo,
            cities: cities.filter((obj) => obj.provin_id != value)
          });
        setFilter({
            ...filterinfo,
            fprovince: fprovince.filter((val) => val != value)
        })  
    }
  }

  const cityHandler =  (e) => {
    const { value, checked } = e.target;
    const { barangay } = searchinfo;
    const { fprovince,fcity } = filterinfo;
    if(checked){
        fprovince?.length>0 && fprovince.map(async (provid)=>{
            const res=await getBarangay(provid,value,'barangay')
            setSearchInfo({...searchinfo,barangay: [...barangay,...res]})
            setFilter({...filterinfo,fcity: [...fcity,value]})

        })
        
    }else{
        setSearchInfo({
            ...searchinfo,
            barangay: barangay.filter((obj) => obj.city_id != value)
          });
        setFilter({
            ...filterinfo,
            fcity: fcity.filter((val) => val != value)
        })  
    }
  }
  const barangayHandler =  (e) => {
    const { value, checked } = e.target;
    const { fbarangay } = filterinfo;
    if(checked){
        setFilter({...filterinfo,fbarangay: [...fbarangay,value]})
        
    }else{
        setFilter({
            ...filterinfo,
            fbarangay: fbarangay.filter((val) => val != value)
        })  
    }
  }
  const subtypeHandler =  (e) => {
    const { value, checked } = e.target;
    const { fsubtype } = filterinfo;
    if(checked){
        setFilter({...filterinfo,fsubtype: [...fsubtype,value]})
        
    }else{
        setFilter({
            ...filterinfo,
            fsubtype: fsubtype.filter((val) => val != value)
        })  
    }
  }
  
  useEffect(()=>{
    if(filterinfo?.fsubtype?.length>0 || filterinfo?.fbarangay?.length>0 || filterinfo?.fcity?.length>0 || filterinfo?.fprovince?.length>0){
        const passParameter=`fsubtype=${filterinfo.fsubtype.join(",")}&fbarangay=${filterinfo.fbarangay.join(",")}&fcity=${filterinfo.fcity.join(",")}&fprovince=${filterinfo.fprovince.join(",")}`
        router.push(`${pathname}?${passParameter}`)
        //btoa for encode
        //atob for decode
    }
    
  },[filterinfo])
  console.log("qsearchparams",qsearchparams.get('fsubtype'))
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container-fluid categoryWraper">
            <h1>Find Property</h1>
            <div className="col-md-3 leftlistItem">
                <div className="leftlistItemBox">
                    
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
                        {/* <div className="priceRange">
                            <h2>Price</h2>
                        </div>
                        <button className="searchProperty">Search</button> */}
                    
                </div>
            </div>
            <div className="col-md-9 rightContainer category_list">
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
