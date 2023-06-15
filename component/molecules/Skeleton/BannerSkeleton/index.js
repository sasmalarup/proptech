import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBanner = () => {
  return (
    <SkeletonTheme color="#5e6c77" highlightColor="#ffffff">
       <Skeleton height={400} />
    </SkeletonTheme>
  );
};

export default SkeletonBanner;
