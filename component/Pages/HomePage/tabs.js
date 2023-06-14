"use client";
import React,{useState} from 'react';
import './styles.scss';
import { getpropertyParentlevel } from "@/lib/getpropertyParentlevel";

function HomeTabs() {
  //Rent part
  const [rent_category,setRentcategory]=useState(0)
  const [rent_province,setRentprovince]=useState(0)
  const [rent_city,setRentcity]=useState(0)
  

  //Sell part
  const [sell_category,setSellcategory]=useState(0)
  const [sell_province,setSellprovince]=useState(0)
  const [sell_city,setSellcity]=useState(0)
  

  const [plevel,setData]=useState([])
  const fetchData = async () => {
    const res = await getpropertyParentlevel('pclevel');
    setData(res)
  };

  fetchData();
  //const handleSelect=(id)=>{
    //console.log("tab click id is ",id)
  //}

  let tabhtml= plevel?.length > 0 && plevel.map((itm,i) =>{
    if (i === 0) {
      return <button className="nav-link active" key={itm.id} id="nav-rent-tab" data-bs-toggle="tab" data-bs-target={`#nav-${itm.level_name.toLowerCase()}`} type="button" role="tab" aria-selected="true" >{itm.level_name}</button>
    }
    return <button className="nav-link" key={itm.id} id="nav-rent-tab" data-bs-toggle="tab" data-bs-target={`#nav-${itm.level_name.toLowerCase()}`} type="button" role="tab" aria-selected="true" >{itm.level_name}</button>
  }


 )
  return (
    <>
    <div className='tabsContainer'>
      <div className="card p-3 shadow tabsCaption">
        <nav>
          <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
          {tabhtml}
            {/* <button className="nav-link active" id="nav-rent-tab" data-bs-toggle="tab" data-bs-target="#nav-rent" type="button" role="tab" aria-selected="true" >Rent</button>
            <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-selected="false" >Sell</button> */}
          </div>
        </nav>
        <div className="tab-content p-3 border bg-light" id="nav-tabContent">
          <div className="tab-pane fade active show" id="nav-rent" role="tabpanel" aria-labelledby="nav-rent-tab">
            <div className="container text-center">
              <div className="row justify-content-start">
                <div className="col-md-10 col-12 selectOption_search">
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Type</label>
                  </div>
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Province</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Province</label>
                  </div>
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose City/Muncipality</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select City/Muncipality</label>
                  </div>
                  {/* <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Barnagay</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Barnagay</label>
                  </div> */}
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
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Type</label>
                  </div>
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Province</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Province</label>
                  </div>
                  <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose City/Muncipality</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select City/Muncipality</label>
                  </div>
                  {/* <div className="col-md-3 col-12 form-floating">
                    <select className="form-select">
                      <option selected>Choose Barnagay</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Select Barnagay</label>
                  </div> */}
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