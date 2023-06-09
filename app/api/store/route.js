import { query } from "../db";
import { NextResponse } from 'next/server';
import { headers } from "next/headers";
export const GET = async (req)=>{
  const headerList=headers()
  let domain_name=''
  if(headerList.get('host')=='localhost:3000'){
    domain_name='realtymgnt.xyz'
  }else{
    domain_name=headerList.get('host')
  }
  
  console.log("domain_name",domain_name)
  try {
    const result = await query({
      query: "SELECT * FROM flower_store_master where store_url LIKE ?",
      values: [`%${domain_name}%`],
    });    
      return NextResponse.json(result) 
  } catch (error) {
      return NextResponse.json(error)
  }   
}
