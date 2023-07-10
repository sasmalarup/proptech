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
            <h1>{data.title}</h1>
            <div className="addressWrapper">
                <p>
                    <RiRoadMapLine fontSize={24} color='grey' style={{marginRight: '4px'}} /> 
                    {data.province_name}, {data.city_name}, {data.municipality_name}, {data.country_name}
                </p>
            </div>
            <h2>{data.price_show==='Y' ? `${getSymbolFromCurrency('PHP')}${parseFloat(data.price).toLocaleString()}`:null}</h2>
            <div className="detailsContainer">
                <div className="col-md-8 floatLeft detailsContent_proptech">
                    <Slider level_name={data.level_name} property_image={data.property_image}/>
                    <div className="propertyDetails_content width-100">
                        <div className="rightContent_property">
                               {parse(data.description)}
                            <div className="prop_Features width-100">
                                <h4>Facilities</h4>
                                <div className="facilitiesBox">
                                    <span>Indoor features :-</span>
                                    <div className="facilitieslist">
                                       {
                                           data.indoorf.split(',').map(itm=><p key={itm}>{itm}</p>) 
                                        }
                                    </div>
                                </div>
                                <div className="facilitiesBox">
                                    <span>Outdoor features :-</span>
                                    <div className="facilitieslist">
                                        {
                                           data.outdoorf.split(',').map(itm=><p key={itm}>{itm}</p>) 
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="FeaturesProperty width-100">
                                    <h4>Property Details</h4>
                                    <ul>
                                        <li>
                                            <label>Bedrooms:<span>{data.bedrooms}</span></label>
                                        </li>
                                        <li>
                                            <label>Baths:<span>{data.baths}</span></label>
                                        </li>
                                        <li>
                                            <label>Total Inventory:<span>{data.total_inventory}</span></label>  
                                        </li>
                                        <li>
                                            <label>Floor area (sqm):<span>{data.floor_area}</span></label>
                                        </li>
                                        <li>
                                            <label>Total No. of Floor:<span>{data.block_lot_unit_floor_no}</span></label>
                                        </li>
                                        <li>
                                            <label>Subdivision Name:<span>{data.key_info_common_name}</span></label>
                                        </li>
                                        <li>
                                            <label>Build (Year):<span>{data.build_year}</span></label>
                                        </li>
                                        <li>
                                            <label>Car Spaces(sqm):<span>{data.car_space}</span></label>
                                        </li>
                                        <li>
                                            <label>Classification:<span>{data.classification}</span></label>
                                        </li>
                                        <li>
                                            <label>Fully furnished:<span>{data.is_fully_furnished}</span></label>
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
