import React from "react";
import Image from "next/image";
//import hotel from'../../../public/images/rent.jpeg';
import { FiMapPin } from 'react-icons/fi';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBathtub, MdOutlineBedroomParent } from 'react-icons/md';
import './styles.scss';
import Link from "next/link";
import parse from 'html-react-parser';
import getSymbolFromCurrency from 'currency-symbol-map'


function FeatureCard({itm}) {
  //const router=useRouter()
  //console.log("dddddddddd",itm)
  return (
    <div className="col-md-4 col-xs-12" key={`div-${itm.id}`}>
      <div className="blogCol" key={`blog-${itm.id}`}>
        <Link href={`/overview/${itm.slug}`} className="featureCard" key={`featureCard-${itm.id}`}>
          <div className="image" key={`imgp-${itm.id}`}>
            <Image
             src={`${process.env.IMG_URL}${process.env.HOME_BLOCK_PROPERTY_IMG_URL}${itm.property_image.split(",")[0]}`}
             width='370'
             height='300'
             alt={itm.title}
             key={`img-${itm.id}`}
            />
            <div className="saleCapton" key={`saleCapton-${itm.id}`}>
                <div className="saleCapton_tab green" key={`saleCapton_tab-${itm.id}`}>
                    <p>{itm.category_name}</p>
                </div>
                <div className="saleCapton_tab" key={`saleCapton_tab1-${itm.id}`}>
                    <p>Active</p>
                </div>
            </div>
          </div>
          <figcaption key={`fig-${itm.id}`}>
              <div className="contentCAption" key={`con-${itm.id}`}>
                    <span className="feature_address" key={`fpa-${itm.id}`}>
                    <FiMapPin fontSize={15} color='grey' style={{marginRight: '4px'}} /> {itm.province_name}, {itm.city_name}  
                    </span>
                    <div className="feature-title" key={`fet-${itm.id}`}>
                    {
                itm.price_show==='Y' ?
                <>
                <h4>
                      <span className="amount">{getSymbolFromCurrency('PHP')}{parseFloat(itm.price).toLocaleString()}</span> / {itm.rent_price_on_yr_or_month_basis==='Yearly'?'Year':'Month'} 
                  </h4>
                </> :
                null
                }
                           
                            <h5>{itm.title}</h5>
                    </div>
                    <div className="fp--excerpt" key={`fpe-${itm.id}`}>
                    {
                         //itm.description.length > 20 ? parse(itm.description.substring(0, 20)) + '...' : parse(itm.description)
                         parse(itm.description)
                      }
                    </div>
              </div>
          </figcaption>
          <div className="property_fdetail width-100" key={`pd-${itm.id}`}>
              <div className="area area_First" key={`af-${itm.id}`}>
                <BiArea fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>Sqm {itm.land_size}</span>
              </div>
              <div className="area" key={`area1-${itm.id}`}>
                <MdOutlineBedroomParent fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>{itm.bedrooms}</span>
              </div>
              <div className="area area_Last" key={`area-${itm.id}`}>
                <MdOutlineBathtub fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>Sqm {itm.floor_area}</span>
              </div>
          </div>
      </Link>
      </div>
    </div>
  );
}

export default FeatureCard;

