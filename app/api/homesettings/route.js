import { query } from "../db";
import { NextResponse } from 'next/server';
export const GET = async (req)=>{ 
  const apiType = req.nextUrl.searchParams.get("ap");
  const storeID = req.nextUrl.searchParams.get("storeid");  
  if(apiType=='Banner'){
      try {
        const result = await query({
          query: "select * from flower_gallery where site_id=? and img_position=?",
          values: [storeID,'T'],
        });    
          return NextResponse.json(result) 
      } catch (error) {
          return NextResponse.json(error)
      }  
  }
   
}

