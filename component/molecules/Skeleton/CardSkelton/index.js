import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../styles.scss'

const CardSkeleton = () => {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="skeletonCard" >
        <Skeleton height={220} />
      <h2 className="mb-0 mt-2" >
        <Skeleton duration={1} height={18} width={'55%'} />
      </h2>
      <p className="section-title" >
        <Skeleton duration={1} height={10} width={75} />
      </p>
      {[...Array(2)].map((item) => (
         <p className="cardDescription">
          <Skeleton duration={1} height={10} width={'100%'} />
        </p>
      ))}
    </div>
    </div>
  );
};

export default CardSkeleton;
