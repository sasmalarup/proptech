import { query } from "../db";
import { NextResponse } from 'next/server';

export const GET = async (req)=>{ 

    const apiType = req.nextUrl.searchParams.get("ap");
    const storeID = req.nextUrl.searchParams.get("storeid");  

    if(apiType=='Banner'){ //home page banner fetching

        try {
          const result = await query({
            query: "select * from flower_gallery where site_id=? and img_position=?",
            values: [storeID,'T'],
          });    
            return NextResponse.json(result) 
        } catch (error) {
            return NextResponse.json(error)
        }  

    }else if(apiType=='pclevel'){ //property parent level fetching

        try {
          const result = await query({
            query: "select * from flower_supplier_category_level where c_level_status=?",
            values: [1],
          });    
            return NextResponse.json(result) 
        } catch (error) {
            return NextResponse.json(error)
        }  

    }else if(apiType=='clevel'){ //property category level fetching

        const levelid = req.nextUrl.searchParams.get("levelid");  
        try {
            const result = await query({
              query: "select * from flower_supplier_category where level_id=?",
              values: [levelid],
            });    
            return NextResponse.json(result) 
        } catch (error) {
            return NextResponse.json(error)
        }  

    }else if(apiType=='sclevel'){ //property sub category level fetching

        const levelid = req.nextUrl.searchParams.get("levelid");  
        const category_id = req.nextUrl.searchParams.get("cid");  
        try {
            const result = await query({
              query: "select * from flower_supplier_sub_category where parent_id=? and category_id=?",
              values: [levelid,category_id],
            });    
            return NextResponse.json(result) 
        } catch (error) {
            return NextResponse.json(error)
        }  

    }else if(apiType=='prov'){ //province fetching
         
        try {
            const result = await query({
              query: "select * from flower_province where country_code=? and province_status=?",
              values: ['PH',1],
            });    
            return NextResponse.json(result) 
        } catch (error) {
            return NextResponse.json(error)
        }  

    }else if(apiType=='city'){ //province fetching
        
      const prov_id = req.nextUrl.searchParams.get("provid");
      try {
          const result = await query({
            query: "select * from flower_city where country_code=? and provin_id=? and city_status=?",
            values: ['PH',prov_id,1],
          });    
          return NextResponse.json(result) 
      } catch (error) {
          return NextResponse.json(error)
      }  

   }else if(apiType=='barangay'){ //province fetching
        
      const prov_id = req.nextUrl.searchParams.get("provid");
      const city_id = req.nextUrl.searchParams.get("cityid");
      try {
          const result = await query({
            query: "select * from flower_municipality where country_code=? and provin_id=? and city_id=? and municipality_status=?",
            values: ['PH',prov_id,city_id,1],
          });    
          return NextResponse.json(result) 
      } catch (error) {
          return NextResponse.json(error)
      }  

  }
   
}
