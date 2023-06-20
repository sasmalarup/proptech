import React from "react";
import Image from "next/image";
import { FcCalendar } from 'react-icons/fc';
import { HiOutlineArrowRight } from 'react-icons/hi'
//import hotel from'../../../public/images/rent.jpeg';
import './styles.scss';
import parse from 'html-react-parser';
import dateFormat from "dateformat";
import Link from "next/link";
function BlogCard({blog}) {
  const now = new Date(blog.blog_post_date);
  //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  return (
    <div className="col-md-6 col-xs-12" >
        <div className="blogCard row">
          <div className="blogImage col-md-6 col-xs-12">
            <div className="image" key={`blog-${blog.id}`}>
              <Image
                src={`${process.env.IMG_URL}${process.env.BLOG_HOME_IMG_URL}${blog.image_name}`}
                width='370'
                height='300'
                alt={blog.title}
                key={`img-${blog.id}`}
              />
            </div>
            <span className="feature_date" key={`feature_date-${blog.id}`}>
              <FcCalendar fontSize={15} color='grey' style={{marginRight: '4px'}} /> {dateFormat(now,"mmmm dS, yyyy")}
            </span>
          </div>
          <figcaption className="col-md-6 col-xs-12">
              <div className="contentCAption">
                    <div className="feature-title" key={`feature-title-${blog.id}`}>
                        <h4>{blog.title}</h4>
                    </div>
                    <div className="fp--excerpt" key={`content-${blog.id}`}>
                      {parse(blog.content)}
                      <Link className="continueBtn" href={`/blog/${blog.slug}`}>Continue Read<HiOutlineArrowRight fontSize={15} style={{marginLeft: '4px'}} /></Link>
                    </div>
              </div>
          </figcaption>
        </div>
    </div>
  );
}

export default BlogCard;

