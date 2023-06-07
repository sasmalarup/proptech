import React from "react";
import image from'../../../public/images/test-2.png';
import quote from '../../../public/images/quote.png';
import './styles.scss';

const Benifits =[
  {
    "tinametle": 'Property Valuation',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "name": 'Legal Title Check',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "name": 'Rates & Trends',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
]

function TestimonialsCard() {

  return (
    <>
    {Benifits.map ((data, i) => {
        return (
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="testimonials">
              <div className="quoteMarks">
                <img
                  className=""
                  src={quote}
                  alt="quote-icon"
                />
              </div>
                <div className="image">
                  <img
                    className=""
                    src={image}
                    alt="user-image"
                  />
                  <div className="testimonialsCaption">
                      <p>{data.description}</p>
                    </div>
                </div>
            </div>
          </div>
        );
      })} 
    </>
  );
}

export default TestimonialsCard;

