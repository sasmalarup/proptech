import React from 'react'
import Link from 'next/link'
import { getpropertyCategory } from '@/lib/getpropertyCategory';
const Secondlevel = async ({ id }) => {
    const slevel = await getpropertyCategory(id, 'clevel');
    //console.log("slevel",slevel)
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
