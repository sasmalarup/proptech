import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import banner from'../../../public/images/featured-banner.jpg';
import './styles.scss';


function FeatureProject() {
  return (
    <>
     <div className="bodyWrapper width-100">
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 projectFeatuer_container'>
                <h1 className='title_first'>Our Feature Project</h1>
                <div className='boxProject'>
                    <h2 className='titleProject'>Lorem Ipsum is simply duy text please this text update by admin panel</h2>
                    <Link href='#' className='shadow'>
                        <Image
                            src={banner}
                            width='100%'
                            height='auto'
                            alt="banner"
                        />
                    </Link>
                </div>
                <div className='boxProject'>
                    <h2 className='titleProject'>Lorem Ipsum is simply duy text please this text update by admin panel</h2>
                    <Link href='#' className='shadow'>
                        <Image
                            src={banner}
                            width='100%'
                            height='auto'
                            alt="banner"
                        />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FeatureProject;
