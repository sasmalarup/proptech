import { query } from '../db'
import { NextResponse } from 'next/server'
import absoluteUrl from 'next-absolute-url'

export const GET = async (req)=>{

    const {origin} = absoluteUrl(req)
    const domain_name=origin.split("://")[1]==='localhost:3000'?'http://www.realtymgnt.xyz': origin 

    try {
        const result = await query({
            query: `SELECT fpm.* FROM flower_property_master as fpm 
                        INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
                        WHERE fspr.seller_id=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                              AND fspr.is_deleted=0`,
            values: [9]
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }

}