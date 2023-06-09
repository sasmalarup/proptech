"use client";
//import Home from "@/component/Pages/HomePage/home"
import { useEffect, useState } from "react"
//import React from "react"
import Home from "@/component/Pages/HomePage"

export default function Homepage() {
 const [data,setData]=useState();
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     // const params = new URLSearchParams({
  //     //   name: 'John Smith',
  //     //   age: 30
  //     // });
  //     const response = await fetch(`${process.env.URL}api/property`);
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchData();
  // },[])
  //console.log(data)
  
  return (
    <>
      <Home />
    </>
      
  )
}