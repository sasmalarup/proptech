"use client";
import React from 'react';
import banner from'../../../public/images/rent1.jpeg';
import userImage from'../../../public/images/rent3.jpeg';
import Image from 'next/image';

function AgentProfle() {
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className='agentRow'>
                <div className="agentImage col-md-5 col-xs-12">
                <div className="image">
                    <Image
                        src={banner}
                        width='100px'
                        height='100px'
                        alt="rentImage"
                    />
                    
                </div>
                <div className="agentImage_user">
                    <Image
                        src={userImage}
                        width='100px'
                        height='100px'
                        alt="rentImage"
                    />
                </div>
            </div>
            <figcaption className="col-md-7 col-xs-12 agentContent">
                <div className="contentCAption">
                        <div className="feature-title">
                            <h2>Agent Name here...</h2>
                            <h4>Blog Title Apa 7 Keuntungan dan Kerugian Investasi</h4>
                        </div>
                        <div className="fp--excerpt">
                        <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                        </div>
                </div>
            </figcaption>
            </div>
        </div>
    </div>
    </>
  );
}
export default AgentProfle;