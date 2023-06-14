import React from "react";
import Image from "next/image";
import { FcCalendar } from 'react-icons/fc';
import { HiOutlineArrowRight } from 'react-icons/hi'
import hotel from'../../../public/images/rent.jpeg';
import './styles.scss';

function BlogCard() {
  return (
    <div className="col-md-6 col-xs-12">
        <div className="blogCard row">
          <div className="blogImage col-md-6 col-xs-12">
            <div className="image">
              <Image
                src={hotel}
                width='100px'
                height='100px'
                alt="rentImage"
              />
            </div>
            <span className="feature_date">
              <FcCalendar fontSize={15} color='grey' style={{marginRight: '4px'}} /> Sep 08, 2023
            </span>
          </div>
          <figcaption className="col-md-6 col-xs-12">
              <div className="contentCAption">
                    <div className="feature-title">
                        <h4>Blog Title Apa 7 Keuntungan dan Kerugian Investasi</h4>
                    </div>
                    <div className="fp--excerpt">
                      <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                      <a className="continueBtn" href="{readmore}">Continue Read<HiOutlineArrowRight fontSize={15} style={{marginLeft: '4px'}} /></a>
                    </div>
              </div>
          </figcaption>
        </div>
    </div>
  );
}

export default BlogCard;

