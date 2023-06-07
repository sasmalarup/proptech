import React from "react";
import Image from "next/image";
import { FcCalendar, FcNext } from 'react-icons/fc';
import hotel from'../../../public/images/rent.jpeg';
import './styles.scss';

function BlogCard() {
  return (
    <div className="col-md-4 col-xs-12">
        <div className="blogCard">
          <div className="image">
            <Image
              src={hotel}
              width='100px'
              height='100px'
              alt="rentImage"
            />
          </div>
          <figcaption>
              <div className="contentCAption">
                    <span className="feature_date">
                      <FcCalendar fontSize={15} color='grey' style={{marginRight: '4px'}} /> Sep 08, 2023
                    </span>
                    <div className="feature-title">
                        <h4>Blog Title</h4>
                    </div>
                    <div className="fp--excerpt">
                      <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                      <a className="continueBtn" href="{readmore}">Continue Read<FcNext fontSize={15} color='grey' style={{marginRight: '4px'}} /></a>
                    </div>
              </div>
          </figcaption>
        </div>
    </div>
  );
}

export default BlogCard;

