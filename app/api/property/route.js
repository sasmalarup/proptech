import { query } from '../db'
import { NextResponse } from 'next/server'
import absoluteUrl from 'next-absolute-url'

export const GET = async (req)=>{

    const apiType = req.nextUrl.searchParams.get("ap");
    const seller_id = req.nextUrl.searchParams.get("seller_id");  

    if(apiType=='pl'){

        const numofrecords = req.nextUrl.searchParams.get("numofrecords") ? req.nextUrl.searchParams.get("numofrecords") : 0; 
        const rent_or_sell_id = req.nextUrl.searchParams.get("rent_or_sell_id") ? req.nextUrl.searchParams.get("rent_or_sell_id") : 0; 
        try {
            let sql,passval;
            if(numofrecords>0){//this part only use for random number records picking
                if(rent_or_sell_id>0){
                    sql=`SELECT fpm.*,fp.province_name,fc.city_name,fsc.category_name FROM flower_property_master as fpm 
                INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
                INNER JOIN flower_province as fp ON fp.province_id=fpm.province
                INNER JOIN flower_city as fc ON fc.cid=fpm.city
                INNER JOIN flower_supplier_category as fsc ON fsc.id=fpm.property_type
                WHERE fspr.seller_id=? AND fpm.offer_type=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                        AND fspr.is_deleted=0 and CURDATE()>=DATE(fpm.available_from) ORDER BY RAND() LIMIT ?`
                passval=[seller_id,rent_or_sell_id,numofrecords]   

                }else{
                    sql=`SELECT fpm.*,fp.province_name,fc.city_name,fsc.category_name FROM flower_property_master as fpm 
                INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
                INNER JOIN flower_province as fp ON fp.province_id=fpm.province
                INNER JOIN flower_city as fc ON fc.cid=fpm.city
                INNER JOIN flower_supplier_category as fsc ON fsc.id=fpm.property_type
                WHERE fspr.seller_id=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                        AND fspr.is_deleted=0 and CURDATE()>=DATE(fpm.available_from) ORDER BY RAND() LIMIT ?`
                passval=[seller_id,numofrecords]   

                }
                   
            }else{
                sql=`SELECT fpm.*,fp.province_name,fc.city_name,fsc.category_name FROM flower_property_master as fpm 
                INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
                INNER JOIN flower_province as fp ON fp.province_id=fpm.province
                INNER JOIN flower_city as fc ON fc.cid=fpm.city
                INNER JOIN flower_supplier_category as fsc ON fsc.id=fpm.property_type
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

    }else if(apiType=='plbyc'){ 

        try {
            //let finalres=[];
            let sql=`SELECT * FROM 
                            (
                                SELECT fpm.city as cid,fc.city_name as cname,count(fc.city_name) as total_no_of_property FROM flower_property_master as fpm 
                                INNER JOIN flower_seller_property_relation as fspr ON fpm.id = fspr.property_id 
                                INNER JOIN flower_city as fc ON fc.cid=fpm.city
                                WHERE fspr.seller_id=? AND fpm.status=1 AND fpm.is_deleted=0 AND fspr.status=1 
                                    AND fspr.is_deleted=0 group by fc.city_name ORDER BY rand() LIMIT 8
                            ) T1
                            ORDER BY cname`
          

            const result = await query({           
                query: sql,
                values: [seller_id] 
            }) 
           
            
            // for (let obj of result) {
                        
            //     let sql2=`SELECT count(id) as total_no_of_property FROM flower_property_master                             
            //                  WHERE status=1 AND is_deleted=0 AND city=?`

            //     const res = await query({           
            //         query: sql2,
            //         values: [obj.city]
            //     })  
            //     finalres.push({
            //         cid:obj.city,
            //         cname: obj.city_name,
            //         total_no_of_property: res[0].total_no_of_property
            //     })               
            // }           
            
            return NextResponse.json(result)
            
        } catch (error) {
            return NextResponse.json(error)
        }
        

    }else if(apiType=='sp'){ 

        const slug = req.nextUrl.searchParams.get("slug");  

        try {
            
            const sql = `SELECT * FROM flower_property_master WHERE slug=?`

            const result = query({
                query: sql,
                values: [slug] 
            })

            return NextResponse.json(result)

        } catch (error) {

            return NextResponse.json(error)
            
        }

    }

}