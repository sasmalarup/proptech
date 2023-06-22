import React from "react";
import phoneCell from '../../../public/images/phone-call.png'
import emailIcon from'../../../public/images/email.png';
import { BsPatchCheckFill } from 'react-icons/bs';
import Slider from "./slider";
import './styles.scss';


function Details() {
   
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container categoryWraper">
            <div className="detailsContainer">
                <div className="col-md-8 floatLeft">
                    {/* <div className="propertyDetails_wrap width-100">
                        <h1>Details Title Head</h1>
                        <p className="propDetls_title">Lorem ipsums is simly dumy text</p>
                    </div> */}
                    <Slider />
                    <div className="propertyDetails_content width-100">
                    
                    <div className="rightContent_property">
                        <h3>Property Description</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        <div className="prop_Features width-100">
                            <h4>Property Features:-</h4>
                            <p><BsPatchCheckFill fontSize={20} color='grey' style={{float: 'left'}} />Balcony</p>
                            <p><BsPatchCheckFill fontSize={20} color='grey' style={{float: 'left'}} />Children Park</p>
                            <p><BsPatchCheckFill fontSize={20} color='grey' style={{float: 'left'}} />Attick</p>
                        </div>
                        <div className="rightContentProperty rightContentProperty_details width-100">
                            <div className="rightFeatures">
                                <h4>Property Details:-</h4>
                                <ul>
                                    <li>
                                        <label>Type:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Status:<span>Rent</span></label>
                                    </li>
                                    <li>
                                        <label>Location:<span>Family Home</span></label>  
                                    </li>
                                    <li>
                                        <label>Sub Location:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Price:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Area:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Bedroom:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Bathroom:<span>Family Home</span></label>
                                    </li>
                                </ul>
                            </div>
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
                            <a href="tel:2345678905"><span><img src={phoneCell} alt="phone" /></span>1232 43566 77</a>
                            <a href="mailto:info@gmail.com"><span><img src={emailIcon} alt="email" /></span>info@gmail.com</a>
                        </div>
                        <form>
                            <input type="text" placeholder="Name" /> 
                            <input type="email" placeholder="Email" /> 
                            <input type="email" placeholder="Phone Number" /> 
                            <button type="submit">Contact Agent</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  );
}

export default Details;
