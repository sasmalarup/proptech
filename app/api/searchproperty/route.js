import { NextResponse } from "next/server"
import { query } from "../db"

export const GET = async (req) => {
    const apiType = req.nextUrl.searchParams.get("ap");
    const cslug = req.nextUrl.searchParams.get("cslug");
    const seller_id = req.nextUrl.searchParams.get("seller_id");
    const level_id = req.nextUrl.searchParams.get("level_id");

    try{

        // let sql=`SELECT fpm.* 
        //                     FROM flower_property_master as fpm 
        //                     INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id  
        //                     INNER JOIN flower_supplier_sub_category as fssc ON fssc.id=fpm.property_type 
        //                     INNER JOIN flower_supplier_master as fsm ON fsm.id=fpm.property_owner_id 
        //                     WHERE fspr.seller_id=? AND fsm.user_active=1 AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1  
        //                     AND fspr.is_deleted=0 AND fssc.slug=?`
        let sql=`SELECT fpm.*,fp.province_name,fc.city_name,fsc.category_name 
        FROM flower_supplier_category as fsc
            INNER JOIN flower_property_master as fpm ON fpm.property_type=fsc.id AND fpm.offer_type=fsc.level_id 
            INNER JOIN flower_seller_property_relation as fspr ON fspr.property_id=fpm.id
            INNER JOIN flower_supplier_master as fsm ON fsm.id=fpm.property_owner_id 
            INNER JOIN flower_province as fp ON fp.province_id=fpm.province
            INNER JOIN flower_city as fc ON fc.cid=fpm.city
        WHERE 
            fsc.level_id=? AND 
            fsc.slug=? AND 
            fspr.seller_id=? AND 
            fsm.user_active=1 AND 
            fpm.status=1 AND 
            fpm.is_deleted=0 AND 
            fspr.status=1 AND 
            fspr.is_deleted=0`                    

        const result = await query({           
            query: sql,
            values: [level_id,cslug,seller_id] 
        }) 

        return NextResponse.json(result)

    }catch(error){

        return NextResponse.json(error)

    }
    
}