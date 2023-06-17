"use client";
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { getpropertyParentlevel } from "@/lib/getpropertyParentlevel";
import { getpropertyCategory } from '@/lib/getpropertyCategory';
import { getallProvince } from '@/lib/getallProvince';
import { getallcityByprovince } from '@/lib/getallcityByprovince';


function HomeTabs() {
  //global part for both
  const [category, setCategory] = useState(0)
  const [province, setProvince] = useState(0)
  const [city, setCity] = useState(0)
  const [catisLoading, setcatLoading] = useState(false)
  const [cityisLoading, setcityLoading] = useState(false)


  const [plevel, setData] = useState([])
  const [catdata, setCatdata] = useState([])
  const [provincedata, setProvincedata] = useState([])
  const [citydata,setCitydata]=useState([])

  //onchange generate category data element common part start
  const tabHandler = async (id) => {
    setcatLoading(true)
    const res = await getpropertyCategory(id, 'clevel')
    setCatdata(res)
    setProvince(0)
    setCitydata([])
    setcatLoading(false)
    //console.log(catdata)
  }
  const provinceHandler = async (provinceID) => {
    //console.log("province", provinceID)
    setProvince(provinceID);
    //setcatLoading(true)
    const res=await getallcityByprovince(provinceID,'city')
    setCitydata(res)
    //setcatLoading(false)
  }
  useEffect(() => {
    const tabload=async ()=>{
      setcatLoading(true);
    const resPlel = await getpropertyParentlevel('pclevel');
    setData(resPlel);
    const res = await getpropertyCategory(resPlel[0].id, 'clevel');
    setCatdata(res);
    const provinceres = await getallProvince('prov');
    setProvincedata(provinceres);
    setcatLoading(false);
    }
   tabload();
  }, [])
  return (
    <>
      <div className='tabsContainer'>
        <div className="card p-3 tabsCaption">
          <nav>
            <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              {
                plevel?.length > 0 && plevel.map((itm, i) => {

                  return <button className={`nav-link ${i === 0 ? 'active' : ''}`} key={itm.id} id="nav-rent-tab" data-bs-toggle="tab" data-bs-target={`#nav-${itm.level_name.toLowerCase()}`} type="button" role="tab" aria-selected="true" onClick={() => tabHandler(itm.id)}>{itm.level_name}</button>

                })
              }

            </div>
          </nav>
          <div className="tab-content p-3 border bg-light shadow" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-rent" role="tabpanel" aria-labelledby="nav-rent-tab">
              <div className="container text-center">
                <div className="row justify-content-start">
                  <div className="col-md-10 col-12 selectOption_search">
                    <div className="col-md-4 col-12 form-floating">
                      <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {
                          catisLoading ?
                            (
                              <option>Loading please wait...</option>
                            ) :

                            (
                              <>
                                <option>Choose Type</option>
                                {
                                  catdata?.length>0 && catdata.map((value, key) => {
                                    return (
                                      <option value={value.id} key={value.id}>
                                        {value.category_name}
                                      </option>
                                    );
                                  })
                                }
                              </>


                            )

                        }


                      </select>
                      <label htmlFor="floatingSelect">Select Type</label>
                    </div>
                    <div className="col-md-4 col-12 form-floating">
                      <select
                        className="form-select"
                        value={province}
                        onChange={(e) => provinceHandler(e.target.value)}
                      >

                        <option>Choose Province</option>
                        {
                          provincedata?.length>0 && provincedata.length > 0 && provincedata.map((value, key) => {
                            return (
                              <option value={value.province_id} key={value.province_id}>
                                {value.province_name}
                              </option>
                            );
                          })
                        }
                      </select>
                      <label htmlFor="floatingSelect">Select Province</label>
                    </div>
                    <div className="col-md-4 col-12 form-floating"> 
                    <select
                        className="form-select"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        {
                          cityisLoading ?
                            (
                              <option>Loading please wait...</option>
                            ) :

                            (
                              <>
                                <option>Choose City/Muncipality</option>
                                {
                                  citydata?.length>0 && citydata.map((value, key) => {
                                    return (
                                      <option value={value.cid} key={value.cid}>
                                        {value.city_name}
                                      </option>
                                    );
                                  })
                                }
                              </>


                            )

                        }


                      </select>
                      <label for="floatingSelect">Select City/Muncipality</label>
                    </div>
                  </div>
                  <div className="searchButton col-md-2 col-12">
                    <button type='button' className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-sell" role="tabpanel" aria-labelledby="nav-sale-tab">
              <div className="container text-center">
                <div className="row justify-content-start">
                  <div className="col-md-10 col-12 selectOption_search">
                    <div className="col-md-4 col-12 form-floating">
                      <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {
                          catisLoading ?
                            (
                              <option>Loading please wait...</option>
                            ) :

                            (
                              <>
                                <option>Choose Type</option>
                                {
                                  catdata?.length>0 && catdata.map((value, key) => {
                                    return (
                                      <option value={value.id} key={value.id}>
                                        {value.category_name}
                                      </option>
                                    );
                                  })
                                }
                              </>


                            )

                        }
                      </select>
                      <label htmlFor="floatingSelect">Select Type</label>
                    </div>
                    <div className="col-md-4 col-12 form-floating">
                      <select
                        className="form-select"
                        value={province}
                        onChange={(e) => provinceHandler(e.target.value)}
                      >

                        <option>Choose Province</option>
                        {
                          provincedata?.length>0 && provincedata.length > 0 && provincedata.map((value, key) => {
                            return (
                              <option value={value.province_id} key={value.province_id}>
                                {value.province_name}
                              </option>
                            );
                          })
                        }
                      </select>
                      <label htmlFor="floatingSelect">Select Province</label>
                    </div>
                    <div className="col-md-4 col-12 form-floating">
                    <select
                        className="form-select"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        {
                          cityisLoading ?
                            (
                              <option>Loading please wait...</option>
                            ) :

                            (
                              <>
                                <option>Choose City/Muncipality</option>
                                {
                                  citydata?.length>0 && citydata.map((value, key) => {
                                    return (
                                      <option value={value.cid} key={value.cid}>
                                        {value.city_name}
                                      </option>
                                    );
                                  })
                                }
                              </>


                            )

                        }
                      </select>
                      <label htmlFor="floatingSelect">Select City/Muncipality</label>
                    </div>
                  </div>
                  <div className="searchButton col-md-2 col-12">
                    <button type='button' className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeTabs;