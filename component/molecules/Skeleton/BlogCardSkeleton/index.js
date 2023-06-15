import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../styles.scss'

const BlogCardSkeleton = () => {
  return (
    <div className="blogSkeleton row">
        <div className="blogImage col-md-6 col-xs-12">
            <Skeleton height={200} />
        </div>
        <figcaption className="col-md-6 col-xs-12">
          <Skeleton duration={1} height={18} width={'55%'} />
            <div className="contentCAption">
              {[...Array(3)].map((item) => (
                <p className="cardDescription">
                  <Skeleton duration={1} height={10} width={'100%'} />
                </p>
              ))}
            </div>
            <Skeleton duration={1} height={18} width={50} />
        </figcaption>
      </div>
  );
};

export default BlogCardSkeleton;
