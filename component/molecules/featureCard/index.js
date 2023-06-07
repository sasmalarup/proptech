import React from "react";
import Image from "next/image";
import hotel from'../../../public/images/rent.jpeg';
import { FiMapPin } from 'react-icons/fi';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBathtub, MdOutlineBedroomParent } from 'react-icons/md';
import './styles.scss';

function FeatureCard() {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="blogCol">
        <div className="featureCard">
          <div className="image">
            <Image
              src={hotel}
              width='100px'
              height='100px'
              alt="rentImage"
            />
            <div className="saleCapton">
                <div className="saleCapton_tab green">
                    <p>House</p>
                </div>
                <div className="saleCapton_tab">
                    <p>Active</p>
                </div>
            </div>
          </div>
          <figcaption>
              <div className="contentCAption">
                    <span className="feature_address">
                    <FiMapPin fontSize={15} color='grey' style={{marginRight: '4px'}} /> 525 W 28th Street, Manila 
                    </span>
                    <div className="feature-title">
                            <h4><span className="amount">Rs.3,410</span> /month</h4>
                            <h5><a href="#">AVA High Line </a></h5>
                    </div>
                    <div className="fp--excerpt">
                      <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                    </div>
              </div>
          </figcaption>
          <div className="property_fdetail width-100">
              <div className="area area_First">
                <BiArea fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>Sqft 1200</span>
              </div>
              <div className="area">
                <MdOutlineBedroomParent fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>3</span>
              </div>
              <div className="area">
                <MdOutlineBathtub fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>2</span>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default FeatureCard;

