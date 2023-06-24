"use client"
import React from "react";
import phoneCell from '../../../public/images/phone-call.png'
import emailIcon from'../../../public/images/email.png';
import { RiRoadMapLine } from 'react-icons/ri';
import Image from "next/image";
import Slider from "./slider";
import parse from 'html-react-parser';
import getSymbolFromCurrency from 'currency-symbol-map'
import './styles.scss';


function Details({data}) {
   
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container titleDetails_proptech">
            <h1>{data[0]?.title}</h1>
            <div className="addressWrapper">
                <p>
                    <RiRoadMapLine fontSize={24} color='grey' style={{marginRight: '4px'}} /> 
                    {data[0]?.province_name}, {data[0]?.city_name}, {data[0]?.municipality_name}, {data[0]?.country_name}
                </p>
            </div>
            <h2>{data[0]?.price_show==='Y' ? `${getSymbolFromCurrency('PHP')}${parseFloat(data[0]?.price).toLocaleString()}`:null}</h2>
            <div className="detailsContainer">
                <div className="col-md-8 floatLeft detailsContent_proptech">
                    <Slider level_name={data[0].level_name} property_image={data[0].property_image}/>
                    <div className="propertyDetails_content width-100">
                        <div className="rightContent_property">
                               {parse(data[0]?.description)}
                            <div className="prop_Features width-100">
                                <h4>Facilities</h4>
                                <div className="facilitiesBox">
                                    <span>Indoor features :-</span>
                                    <div className="facilitieslist">
                                       {
                                           data[0]?.indoorf?.split(',').map(itm=><p key={itm}>{itm}</p>) 
                                        }
                                    </div>
                                </div>
                                <div className="facilitiesBox">
                                    <span>Outdoor features :-</span>
                                    <div className="facilitieslist">
                                        {
                                           data[0]?.outdoorf?.split(',').map(itm=><p key={itm}>{itm}</p>) 
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="FeaturesProperty width-100">
                                    <h4>Property Details</h4>
                                    <ul>
                                        <li>
                                            <label>Bedrooms:<span>{data[0]?.bedrooms}</span></label>
                                        </li>
                                        <li>
                                            <label>Baths:<span>{data[0]?.baths}</span></label>
                                        </li>
                                        <li>
                                            <label>Total Inventory:<span>{data[0]?.total_inventory}</span></label>  
                                        </li>
                                        <li>
                                            <label>Floor area (sqm):<span>{data[0]?.floor_area}</span></label>
                                        </li>
                                        <li>
                                            <label>Total No. of Floor:<span>{data[0]?.block_lot_unit_floor_no}</span></label>
                                        </li>
                                        <li>
                                            <label>Subdivision Name:<span>{data[0]?.key_info_common_name}</span></label>
                                        </li>
                                        <li>
                                            <label>Build (Year):<span>{data[0]?.build_year}</span></label>
                                        </li>
                                        <li>
                                            <label>Car Spaces(sqm):<span>{data[0]?.car_space}</span></label>
                                        </li>
                                        <li>
                                            <label>Classification:<span>{data[0]?.classification}</span></label>
                                        </li>
                                        <li>
                                            <label>Fully furnished:<span>{data[0]?.is_fully_furnished}</span></label>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 propertyDetails_content leftlistItem floatLeft">
                    <div className="leftDetails">
                        <h3>Contact Listing Agent</h3>
                        <p className="typeTitle">Field Gate Property</p>
                        <div className="infoAgent width-100">
                            <p>Metro Manila City</p>
                            <a href="tel:2345678905"><span>
                                <Image
                                src={phoneCell}
                                width={18}
                                height={18}
                                alt="logo"
                                />
                            </span>1232 43566 77</a>
                            <a href="mailto:info@gmail.com">
                                <span><Image
                                src={emailIcon}
                                width={18}
                                height={18}
                                alt="logo"
                                /></span>
                                info@gmail.com</a>
                        </div>
                        <form>
                            <input type="text" placeholder="Name" /> 
                            <input type="email" placeholder="Email" /> 
                            <input type="email" placeholder="Phone Number" /> 
                            <button type="submit">Contact Agent</button>
                        </form>
                        <p className="proptechTerms">By clicking Contact Seller, you are accepting Proptech's <a href="#">Terms and Condition</a> and <a href="#">Privacy Policy</a> page. </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  );
}

export default Details;
