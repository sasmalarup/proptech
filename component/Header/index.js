"use client"
import React, { useState, useEffect } from "react"
import './styles.scss';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import phone from '../../public/images/phone.png'
import loginUser from '../../public/images/user-icon.png'
import { usePathname } from 'next/navigation';
import { getpropertyParentlevel } from "@/lib/getpropertyParentlevel";
import { getCMSList } from "@/lib/getCMSList";
import Link from "next/link";
import Secondlevel from "./secondlevel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGlobalstate } from "@/redux/features/globalSlice";
import { getStoredetails } from "@/lib/getStoredetails";



function Header({ origin }) {
  const dispatch = useDispatch()
  const pathname = usePathname();
  const seller_id = useSelector(state => state.globalReducer.value.storeID)
  const headerClass = pathname === '/' ? 'navbar navbar-expand-lg navbar-light bg-light' : 'navbar navbar-expand-lg navbar-light bg-light innerHeader';
  const [plevel, setData] = useState([])
  const [cmsList, setCms] = useState([])


  useEffect(() => {
    const getStore = async () => {
      const storeDetails = await getStoredetails(origin);
      dispatch(setGlobalstate(storeDetails[0]?.id))
    }

    getStore()

    const fetchData = async () => {
      // Initiate both requests in parallel
      const resPLevel = await getpropertyParentlevel(origin, 'pclevel')
      setData(resPLevel)

      const resCmsList = await getCMSList(origin, 'cmslist', seller_id)
      setCms(resCmsList)

    }

    fetchData();

  }, [seller_id])


  //console.log("cmsList",cmsList);

  return (
    <>
      <nav className={headerClass}>
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <Image
                src={logo}
                width={500}
                height={500}
                alt="logo"
                priority={true}
              />
            </Link>
          </div>
          <div className="assignBtn">
            <Link className="btnRcnt" href="/">Recent</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav rightNav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              {
                plevel?.length > 0 && plevel.map(itm =>
                  <li className="nav-item dropdown" key={itm.id}>
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {itm.level_name}
                    </Link>
                    <Secondlevel id={itm.id} origin={origin} />
                  </li>

                )
              }




              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {
                    cmsList?.length > 0 && cmsList.map(cms => {
                      return <li key={cms.slug}><Link className="dropdown-item" href={`/info/${cms.slug}`}>{cms.title}</Link></li>
                    })
                  }
                </ul>
              </li>




            </ul>
            <Link href="/login" className="userIcon">
              <Image
                src={loginUser}
                width={40}
                height={40}
                alt="user"
              />
            </Link>
            <div className="callicon">
              <Image
                src={phone}
                width={64}
                height={64}
                alt="phone"
              />
              <div className="callinfo">
                <span>Call Us Now</span>
                <Link href="tel: 2435879678">24 3587 9678</Link>
              </div>
            </div>
            <Link className="btnRcnt" href="/">Recent</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;