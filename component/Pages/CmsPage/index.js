"use client"
import { getCMSDetails } from "@/lib/getCMSList"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import parse from 'html-react-parser'

function CmsPage() {

  const seller_id = useSelector(state => state.globalReducer.value.storeID)
  const params = useParams()
  const [cmsDetails, setCmsDetails] = useState([])

  useEffect(()=>{

      const fetchData = async () => {         
        const cmsinfo = await getCMSDetails('cmsdetails',seller_id,params.slug)        
        setCmsDetails(cmsinfo)
      };
    
      fetchData();

  },[seller_id])
   
  return (
    <>
        <div className="bodyWrapper width-100">
            <div className="container ">
                <div className="row cmsContaier">
                    <div className="col-md-12 leftContect-box"> 
                        <h2>
                        { 
                          cmsDetails.length>0 ?  parse(cmsDetails[0].title) : <></>
                        }
                        </h2>                       
                        { 
                          cmsDetails.length>0 ?  parse(cmsDetails[0].content) : <></>
                        }
                    </div>
                </div>
            </div>
       </div>
    </>
  );
}

export default CmsPage;
