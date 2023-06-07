import React from "react";
import Image from "next/image";
import image from "../../../public/images/aaa.jpeg"
import './styles.scss';

const Benifits =[
  {
      "title": 'Property Valuation',
      "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Legal Title Check',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Rates & Trends',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'EMI Calcualtor',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Easy Investment',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Research Insights',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  }
]

function BenifitsCard() {

  return (
    <>
    {Benifits.map ((data, i) => {
        return (
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="cardBenifits">
                <div className="image">
                  <Image
                    src={image}
                    width='60px'
                    height='60px'
                    alt="icon"
                    unoptimized
                  />
                  <div className="cardBenifitsCaption">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
          </div>
        );
      })} 
    </>
  );
}

export default BenifitsCard;

