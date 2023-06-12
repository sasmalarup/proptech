import React from "react";
import phoneCell from '../../../public/images/phone-call.png'
import emailIcon from'../../../public/images/mail.png';
import MapPin from '../../../public/images/pin.png'
import Image from "next/image";
import './styles.scss';


function ContactUsPage() {
   
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container ">
            <div className="row contactWrapper">
                <div className="col-md-4 leftContect-box">
                    <div className="infoBox addressBox">
                        <Image
                            src={MapPin}
                            width='30px'
                            height='30px'
                            alt="Pin"
                        />
                        <h3>Address</h3>
                        <p>Lorem Ipsum is simply dumy text please check</p>
                    </div>
                    <div className="infoBox addressBox">
                        <Image
                            src={emailIcon}
                            width='30px'
                            height='30px'
                            alt="Pin"
                        />
                        <h3>Email</h3>
                        <p>info.citydream@gmail.com</p>
                    </div>
                    <div className="infoBox addressBox">
                        <Image
                            src={phoneCell}
                            width='30px'
                            height='30px'
                            alt="Pin"
                        />
                        <h3>Phone</h3>
                        <p>+62 3456 45 4567</p>
                    </div>
                </div>
                <div className="col-md-8 rightContect-box">
                    <h2>Send us a message</h2>
                    <p>If you have any quires related to my citydreams, you can send me message from here. it's my pleasure to help you.</p>
                    <form>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Your Email" />
                        <textarea placeholder="Enter Your Message"></textarea>
                        <button className="submtBtn btn btn-primary">Send a message</button>
                    </form>
                </div>
            </div>
            </div>
       </div>
    </>
  );
}

export default ContactUsPage;
