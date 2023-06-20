"use client"
import Category from '@/app/category/page'
import React from 'react'
import {useSearchParams} from "next/navigation"

const Propertylist = ({params}) => {
    const searchParams = useSearchParams();
    //console.log("sparam",searchParams.get('page'))
    //console.log("slug",params.slug)
  return (
    <>
      <Category />
      
    </>
  )
}

export default Propertylist
