import React from "react";
import FooterLink from "./footerLink"
import CopyRight from "./copyRight"
import "./styles.scss";

function Footer() {

  return (
    <>
    <div className="menuNavTop">
    <div className="subscribeNews width-100">
      <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Subscribe Newsletter</h3>
                    <p>Choose from your dream city in house</p>
                </div>
                <div className="col-md-6">
                    <div className="newsSubscribe_form">
                        <input type="text" placeholder="Type Your Email Address" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <FooterLink/>
    <CopyRight />
    </>
  );
}

export default Footer;

