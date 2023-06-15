import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../styles.scss'

const BenifitsCardSkeleton = () => {
  return (
    <div className="benifitsSkeleton">
        <Skeleton height={75} width={75} borderRadius={'50%'} />
        <div className="benifitsContent">
            {[...Array(3)].map((item) => (
                <p className="cardDescription">
                <Skeleton duration={1} height={10} width={'90%'} />
                </p>
            ))}
        </div>
        <h2 className="mb-0 mt-4">
            <Skeleton duration={1} height={18} width={75} />
        </h2>
    </div>
  );
};

export default BenifitsCardSkeleton;
