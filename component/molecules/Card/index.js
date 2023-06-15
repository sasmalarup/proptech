import React from "react";
import Image from "next/image";
//import hotel from'../../../public/images/rent.jpeg';
import { FiMapPin } from 'react-icons/fi';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBathtub, MdOutlineBedroomParent } from 'react-icons/md';
import Link from "next/link";
const parse = require('html-react-parser');
import './styles.scss';

function AssetsCard({itm}) {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="blogCol">
        <div className="blogSnip">
          <div className="image">
            <Image
              src={`${process.env.IMG_URL}${process.env.HOME_BLOCK_PROPERTY_IMG_URL}${itm.property_image.split(",")[0]}`}
              width='370'
              height='300'
              alt={itm.title}
            />
          </div>
          <figcaption>
              <div className="contentCAption">
                {
                itm.price_show==='Y' ?
                <>
                <span className="fp_price">
                      <span className="amount">Rs.{parseFloat(itm.price).toLocaleString()}</span> / {itm.rent_price_on_yr_or_month_basis==='Yearly'?'Year':'Month'} 
                  </span>
                </> :
                ""
                }
                  
                  <div className="fp-title">
                      <h4><Link href={`/${itm.slug}`}>{itm.key_info_common_name}</Link></h4>
                      <p className="fp-address">
                      <FiMapPin fontSize={15} color='grey' style={{marginRight: '4px'}} />
                        525 W 28th St 
                        </p>
                  </div>
                  <div className="fp--excerpt">
                      {
                         //itm.description.length > 20 ? parse(itm.description.substring(0, 20)) + '...' : parse(itm.description)
                         parse(itm.description)
                      }
                    </div>
              </div>
          </figcaption>
          <div className="property_detail width-100">
              <div className="area area_First">
                <BiArea fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>Sqm {itm.land_size}</span>
              </div>
              <div className="area">
                <MdOutlineBedroomParent fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                  <span>{itm.bedrooms}</span>
              </div>
              <div className="area">
              <MdOutlineBathtub fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                  <span>Sqm {itm.floor_area}</span>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default AssetsCard;

