"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.scss'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Reduxprovider } from "../redux/provider";
import ErrorBoundary from "../component/errorboundary/errorboundary"
import Error from "./error";



export default function RootLayout({children,params}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    
  }, []);
  
  return (
    <html lang="en">
        <body>
        <Reduxprovider>  
            <Header origin={params.origin}/>  
           <ErrorBoundary fallback={<Error />}>
           {children} 
           </ErrorBoundary>                    
            <Footer/>
         </Reduxprovider>       
      </body>
    </html>
  )
}



