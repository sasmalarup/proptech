"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { getpropertyCategory } from '@/lib/getpropertyCategory';
const Secondlevel = ({ id }) => {
    const [slevel,setData]=useState([])
    const fetchData = async () => {
        const res = await getpropertyCategory(id, 'clevel');
        setData(res)
    };

    fetchData();
    return (
        <>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {
                    slevel?.length > 0 && slevel.map((smn) => <li key={smn.id}><Link className="dropdown-item" href={`/${smn.slug}`}>{smn.category_name}</Link></li>)
                }


            </ul>
        </>
    )
}

  
export default Secondlevel
