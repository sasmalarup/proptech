import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../styles.scss'

const PropertySkeleton = () => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 propertySkeleton">
        <div className="skeletonImge">
            <Skeleton height={75} width={75} borderRadius={'50%'} />
        </div>
        <div className="skeletonContent">
            {[...Array(2)].map((item) => (
                <p className="cardDescription">
                <Skeleton duration={1} height={10} width={'100%'} />
                </p>
            ))}
        </div>
    </div>
  );
};

export default PropertySkeleton;
