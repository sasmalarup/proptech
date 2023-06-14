import { query } from "../db";
import { NextResponse } from 'next/server';
import absoluteUrl from 'next-absolute-url'
export const GET = async (req)=>{
  const { origin } = absoluteUrl(req)
  const domain_name=origin.split("://")[1]==='localhost:3000'?'http://www.realtymgnt.xyz': origin
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
