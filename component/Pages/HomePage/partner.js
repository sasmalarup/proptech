import React from "react";
import Image from "next/image";
import partnerImg from '../../../public/images/partner.jpeg';
import partnerImg2 from '../../../public/images/partner-2.jpeg';
import partnerImg3 from '../../../public/images/partner-3.jpeg';
import partnerImg4 from '../../../public/images/partner-4.jpeg';
import partnerImg5 from '../../../public/images/partner-5.jpeg';
import './styles.scss';

const partners =[
  {
    "image": partnerImg,
  },
  {
    "image": partnerImg2,
  },
  {
    "image": partnerImg3,
  },
  {
    "image": partnerImg4,
  },
  {
    "image": partnerImg5,
  },
]

function Partner() {

  return (
    <>
    {partners.map ((data, i) => {
        return (
            <div className="partnersWrap">
                <Image
                 src={data.image}
                  width='150px'
                  height='60px'
                  alt="partner-img"
                />
            </div>
        );
      })} 
    </>
  );
}

export default Partner;

