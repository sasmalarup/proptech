"use client"
import React from 'react';
import Image from "next/image";
import { FaUser } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
//import banner from'../../../public/images/featured-banner.jpg';
import parse from 'html-react-parser';
import dateFormat from "dateformat";
import './styles.scss';

const ImageLoader=({ src, width, quality }) => {
  return `${process.env.IMG_URL}${process.env.BLOG_DETAILS_IMG_URL}${src}?w=${width}&q=${quality || 75}`
}
function BlogDetailsPage({data}) {
  //const now = new Date(data.blog_post_date);
  return (
    <>
     <div className="bodyWrapper width-100">
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 blog_container'>
                <div className='boxProject'>
                    <div className='shadow'>
                    <Image
                           loader={ImageLoader}
                            src={data.image_name}
                            width='1200'
                            height='311'
                            alt={data.title}
                        />
                    </div>
                    <div className='publishDetails'>
                      <h1 className='title_first'>{data.title}</h1>
                      <div className='publishContent'>
                        <p><FaUser fontSize={12} color='grey' style={{marginRight: '4px'}} />Ravi Kumar</p>
                        <p><BsCalendar fontSize={12} color='grey' style={{marginRight: '4px'}} />{dateFormat(data.blog_post_date,"mmmm dS, yyyy")}</p>
                      </div>
                      <div className='detailsdescription'>
                      {parse(data.content)}
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
