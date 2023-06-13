"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.scss'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import { Reduxprovider } from "@/redux/provider";

export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <Reduxprovider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Reduxprovider>
    </html>
  )
}



