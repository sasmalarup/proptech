"use client"
import React, { useEffect } from "react"
import './styles.scss';
import Image from 'next/image';
import logo from'../../public/images/logo.png';
import phone from '../../public/images/phone.png'
import loginUser from '../../public/images/user-icon.png'
import { usePathname } from 'next/navigation';


function Header() {
  const pathname = usePathname(); 
  const headerClass = pathname === '/' ? 'navbar navbar-expand-lg navbar-light bg-light' : 'navbar navbar-expand-lg navbar-light bg-light innerHeader';
  return (
    <>
      <nav className={headerClass}>
        <div className="container">
          <div className="navbar-brand">
            <a href="/">
              <Image
                src={logo}
                width={500}
                height={500}
                alt="logo"
              />
            </a>
          </div>
          <div className="assignBtn">
            <a className="btnRcnt" href="{Recent}">Recent</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav rightNav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rent
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/category">Commercial</a></li>
                  <li><a className="dropdown-item" href="/category">Land</a></li>
                  <li><a className="dropdown-item" href="/category">House</a></li>
                  <li><a className="dropdown-item" href="/category">Apartment</a></li>
                  <li><a className="dropdown-item" href="/category">Condominium</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sell/Buy
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/category">Commercial</a></li>
                  <li><a className="dropdown-item" href="/category">Land</a></li>
                  <li><a className="dropdown-item" href="/category">House</a></li>
                  <li><a className="dropdown-item" href="/category">Apartment</a></li>
                  <li><a className="dropdown-item" href="/category">Condominium</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lease
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Commercial</a></li>
                  <li><a className="dropdown-item" href="#">Land</a></li>
                  <li><a className="dropdown-item" href="#">House</a></li>
                  <li><a className="dropdown-item" href="#">Apartment</a></li>
                  <li><a className="dropdown-item" href="#">Condominium</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Property Mgnt.</a></li>
                  <li><a className="dropdown-item" href="#">Contract Mgnt.</a></li>
                  <li><a className="dropdown-item" href="#">Billing Mgnt.</a></li>
                  <li><a className="dropdown-item" href="#">Collection Mgnt.</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/package">pricing</a>
              </li>
            </ul>
            <a href="/login" className="userIcon">
            <Image
              src={loginUser}
              width={40}
              height={40}
              alt="user"
            />
            </a>
            <div className="callicon">
                <Image
                  src={phone}
                  width={64}
                  height={64}
                  alt="phone"
                />
                <div className="callinfo">
                  <span>Call Us Now</span>
                  <a href="tel: 2435879678">24 3587 9678</a>
                </div>
            </div> 
            <a className="btnRcnt" href="{Recent}">Recent</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;