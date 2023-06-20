import { NextResponse } from "next/server"
import { query } from "../db"

export const GET = async (req) => {
    const apiType = req.nextUrl.searchParams.get("ap");
    const cslug = req.nextUrl.searchParams.get("cslug");

    try{

        let sql=`SELECT fpm.* 
                            FROM flower_property_master as fpm 
                            INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id  
                            INNER JOIN flower_supplier_sub_category as fssc ON fssc.id=fpm.property_type 
                            INNER JOIN flower_supplier_master as fsm ON fsm.id=fpm.property_owner_id 
                            WHERE fsm.user_active=1 AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1  
                            AND fspr.is_deleted=0 AND fssc.slug=?`

        const result = await query({           
            query: sql,
            values: [cslug] 
        }) 

        return NextResponse.json(result)

    }catch(error){

        return NextResponse.json(error)

    }
    
}