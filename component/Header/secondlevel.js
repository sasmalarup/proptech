"use client"
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import { getpropertyCategory } from '@/lib/getpropertyCategory';
const Secondlevel = ({ id,origin }) => {
    const [slevel,setData]=useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const res = await getpropertyCategory(origin,id, 'clevel');
            setData(res)
        };
    
        fetchData();  
    },[])
    //let subpath=(id===5)?`s`:`r`;
    return (
        <>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {
                    slevel.length > 0 && slevel.map((smn) => <li key={smn.id}><Link className="dropdown-item" href={`/${smn.level_id}/property/${smn.slug}`}>{smn.category_name}</Link></li>)
                }


            </ul>
        </>
    )
}

  
export default Secondlevel
