import React from "react";
import Image from "next/image";
import homeImage from '../../public/images/room-house.jpeg'
import homeImage2 from '../../public/images/room-house2.jpeg'
import pinIcon from '../../public/images/pin.png'
import phoneIcon from '../../public/images/email.png'
import emailIcon from '../../public/images/phone.png'
import logo from'../../public/images/logo.png';
import "./styles.scss";

function FooterLink() {

  return (
    <div className="FooterBootm">
        <div className="container">
            <div className="row">
                <div className="col-md-3 footerFsc-widgt footerLeftInfo infoBoxFooter">
                    <Image
                        src={logo}
                        width={101}
                        height={45}
                        alt="logo"
                    />
                    <p>DreamCity brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.</p>
                    <p>CitiLights brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.</p>
                </div>
                <div className="col-md-6 footerFsc-widgt footerUseLink">
                    <div className="footerFsc-widgt floatLeft midLink">
                        <h5>Featured Property</h5>
                        <ul className="featureProp_wrap">
                            <li>
                                <Image
                                    src={homeImage}
                                    width={70}
                                    height={60}
                                    alt="logo"
                                />
                                <p>For Rent<br/><span>Makati City, Barangay</span></p>
                            </li>
                            <li>
                                <Image
                                    src={homeImage2}
                                    width={70}
                                    height={60}
                                    alt="logo"
                                />
                                <p>For Sell<br/><span>Makati City, Barangay2</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className="footerFsc-widgt floatLeft midLink">
                        <h5>Useful Link</h5>
                        <ul className="quicklink">
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact Support</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 footerFsc-widgt fooerIframeinfo">
                    <h5>Contact Info</h5>
                    <div className="contactINfo">
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text">
                            <Image
                                src={pinIcon}
                                width={18}
                                height={18}
                                alt="icon"
                            />
                            </span>
                            <p>376 Camac Street, Philipines</p>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text">
                            <Image
                                src={emailIcon}
                                width={18}
                                height={18}
                                alt="icon"
                            />
                            </span>
                            <p><a href="mailto:info.mai@gmail.com"></a>info.mai@gmail.com</p>
                        </div>
                        <div className="input-group mb-3 col-6">
                            <span className="input-group-text">
                            <Image
                                src={phoneIcon}
                                width={18}
                                height={18}
                                alt="icon"
                            />
                            </span>
                            <p><a href="tel: 6221234345510">622 1234 3455 10</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FooterLink;

