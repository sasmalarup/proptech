import React from "react";
import phoneCell from '../../../public/images/phone-call.png'
import emailIcon from'../../../public/images/email.png';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiRoadMapLine } from 'react-icons/ri';
import Image from "next/image";
import Slider from "./slider";
import './styles.scss';


function Details() {
   
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container titleDetails_proptech">
            <h1>Title Details</h1>
            <div className="addressWrapper">
                <p>
                    <RiRoadMapLine fontSize={24} color='grey' style={{marginRight: '4px'}} /> 
                    Proveince, city, Barangay, Philippines
                </p>
            </div>
            <h2>₱ 530,000</h2>
            <div className="detailsContainer">
                <div className="col-md-8 floatLeft detailsContent_proptech">
                    <Slider />
                    <div className="propertyDetails_content width-100">
                        <div className="rightContent_property">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            <div className="prop_Features width-100">
                                <h4>Facilities</h4>
                                <div className="facilitiesBox">
                                    <span>Indoor features :-</span>
                                    <div className="facilitieslist">
                                        <p>Balcony</p>
                                        <p>Children Park</p>
                                        <p>Attick</p>
                                    </div>
                                </div>
                                <div className="facilitiesBox">
                                    <span>Outdoor features :-</span>
                                    <div className="facilitieslist">
                                        <p>Pool Baar</p>
                                        <p>Library</p>
                                        <p>Carport</p>
                                    </div>
                                </div>
                            </div>
                            <div className="FeaturesProperty width-100">
                                    <h4>Property Details</h4>
                                    <ul>
                                        <li>
                                            <label>Bedrooms:<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Baths:<span>Rent</span></label>
                                        </li>
                                        <li>
                                            <label>Total Inventory:<span>Family Home</span></label>  
                                        </li>
                                        <li>
                                            <label>Floor area (m2):<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Total No. of Floor:<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Subdivision Name:<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Build (Year):<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Car Spaces:<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Classification:<span>Family Home</span></label>
                                        </li>
                                        <li>
                                            <label>Fully furnished:<span>Family Home</span></label>
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
