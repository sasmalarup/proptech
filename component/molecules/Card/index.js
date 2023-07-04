import React from "react";
import Image from "next/image";
//import hotel from'../../../public/images/rent.jpeg';
import { FiMapPin } from 'react-icons/fi';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBathtub, MdOutlineBedroomParent } from 'react-icons/md';
import Link from "next/link";
import parse from 'html-react-parser';
import getSymbolFromCurrency from 'currency-symbol-map'
import './styles.scss';

const ImageLoader=({ src, width, quality }) => {
  return `${process.env.IMG_URL}${process.env.HOME_BLOCK_PROPERTY_IMG_URL}${src}?w=${width}&q=${quality || 75}`
}

function AssetsCard({itm}) {
  return (
    <div className="col-md-4 col-xs-12">
        <div className="blogSnip">
          <div className="image">
            <Image
            loader={ImageLoader}
              src={itm.property_image.split(",")[0]}
              width='370'
              height='300'
              alt={itm.title}
              
            />
          </div>
          <figcaption>
              <div className="contentCAption">
                {
                itm.price_show==='Y' &&
                
                <span className="fp_price">
                      <span className="amount">{getSymbolFromCurrency('PHP')}{parseFloat(itm.price).toLocaleString()}</span> / {itm.rent_price_on_yr_or_month_basis==='Yearly'?'Year':'Month'} 
                  </span>
                
                }
                  
                  <div className="fp-title">
                      <h4><Link href={`/overview/${itm.slug}`} >{itm.title}</Link></h4>
                      <p className="fp-address">
                      <FiMapPin fontSize={15} color='grey' style={{marginRight: '4px'}} />
                        {itm.province_name}, {itm.city_name} 
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
                <BiArea fontSize={20} color='grey' style={{float: 'left'}} />
                <span>Sqm {itm.land_size}</span>
              </div>
              <div className="area" key={`area1-${itm.id}`}>
                <MdOutlineBedroomParent fontSize={20} color='grey' style={{float: 'left'}} />
                  <span>{itm.bedrooms}</span>
              </div>
              <div className="area area_Last">
              <MdOutlineBathtub fontSize={20} color='grey' style={{float: 'left'}} />
                  <span>Sqm {itm.floor_area}</span>
              </div>
          </div>
        </div>
    </div>
  );
}

export default AssetsCard;

