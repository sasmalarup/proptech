import { NextResponse } from require("next/server");
import { query } from "../db";

export const GET = async (req) => {
    const apiType = req.nextUrl.searchParams.get("ap");
    const storeID = req.nextUrl.searchParams.get("storeid"); 
    if(apiType=="blogs"){
        const numofrecords = req.nextUrl.searchParams.get("numofrecords") ? req.nextUrl.searchParams.get("numofrecords") : 0; 
        try {
            const sql =`SELECT * FROM flower_blog WHERE is_active=1 AND site_id=? ORDER BY RAND() LIMIT ?`
            const passval = [ storeID, numofrecords ]

            const result = await query({
                query: sql,
                values: passval
            })

            return NextResponse.json(result)

        } catch (error) {
            NextResponse.json(error)
        }
    }
}