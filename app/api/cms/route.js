const { NextResponse } = require("next/server")
import { query } from "../db"

export const GET = async (req) =>{

    const apiType = req.nextUrl.searchParams.get("ap");
    const seller_id = req.nextUrl.searchParams.get("seller_id");  

    if(apiType=="cmslist"){

        try{
            let sql = `SELECT * FROM flower_cms WHERE site_id=?`
            const result = await query({
                query: sql,
                values: [seller_id]
            })
            return NextResponse.json(result)
        }catch(error){
            return NextResponse.json(error)
        }

    }
    
    
}