import { query } from '../db'
import { NextResponse } from 'next/server'
import absoluteUrl from 'next-absolute-url'

export const GET = async (req)=>{

    const {origin} = absoluteUrl(req)
    const domain_name=origin.split("://")[1]==='localhost:3000'?'http://www.realtymgnt.xyz': origin 
    const seller_id = req.nextUrl.searchParams.get("seller_id");  
    const numofrecords = req.nextUrl.searchParams.get("numofrecords")?req.nextUrl.searchParams.get("numofrecords"):0; 
    try {
        let sql,passval;
        if(numofrecords){
          sql=`SELECT fpm.* FROM flower_property_master as fpm 
          INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
          WHERE fspr.seller_id=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                AND fspr.is_deleted=0 and CURDATE()>=DATE(fpm.available_from) ORDER BY RAND() LIMIT ?`
          passval=[seller_id,numofrecords]      
        }else{
            sql=`SELECT fpm.* FROM flower_property_master as fpm 
            INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
            WHERE fspr.seller_id=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                  AND fspr.is_deleted=0`
            passval=[seller_id]       
        }
        const result = await query({
           
            query: sql,
            values: passval
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }

}