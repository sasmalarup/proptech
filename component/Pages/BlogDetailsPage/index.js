import React from 'react';
import Image from "next/image";
import { FaUser } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import banner from'../../../public/images/featured-banner.jpg';
import './styles.scss';


function BlogDetailsPage() {
  return (
    <>
     <div className="bodyWrapper width-100">
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 blog_container'>
                <div className='boxProject'>
                    <div className='shadow'>
                        <Image
                            src={banner}
                            width='100%'
                            height='auto'
                            alt="banner"
                        />
                    </div>
                    <div className='publishDetails'>
                      <h1 className='title_first'>Blog Details Title</h1>
                      <div className='publishContent'>
                        <p><FaUser fontSize={12} color='grey' style={{marginRight: '4px'}} />Ravi Kumar</p>
                        <p><BsCalendar fontSize={12} color='grey' style={{marginRight: '4px'}} />19, Oct</p>
                      </div>
                      <div className='detailsdescription'>
                        <p>Continued Demand for Residential Properties: The Philippines has a growing population and a rising middle class, which will likely drive the demand for residential properties. The trend of urbanization is expected to continue, leading to increased demand for affordable housing, particularly in major cities like Metro Manila and Cebu.</p>
                        <p>Focus on Sustainable and Green Buildings: With increasing environmental concerns, there is likely to be a growing emphasis on sustainable and green buildings in the real estate sector. Developers may incorporate energy-efficient features, renewable energy sources, and eco-friendly designs to meet the demand for environmentally conscious properties.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogDetailsPage;
