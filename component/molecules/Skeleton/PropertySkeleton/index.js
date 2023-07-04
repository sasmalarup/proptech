import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../styles.scss'

const PropertySkeleton = () => {
  //console.log("ddddd",i)
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 propertySkeleton" >
        <div className="skeletonImge" >
            <Skeleton height={100} width={100} borderRadius={'50%'} />
        </div>
        <div className="skeletonContent" >
            {[...Array(2)].map((item,i) => (
                <p className="cardDescription" key={i}>
                <Skeleton duration={1} height={10} width={'100%'} />
                </p>
            ))}
        </div>
    </div>
  );
};

export default PropertySkeleton;
