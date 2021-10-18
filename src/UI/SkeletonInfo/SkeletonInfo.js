import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

const SkeletonInfo = (props) => {
  const arrayNbrs = [];
  for (let index = 0; index < props.nubrSkeleton; index++) {
    arrayNbrs.push(index);
  }


  return( <>
  
    {arrayNbrs.map((index , nbr) =>{

    return ( <Box pb={5} key={"selktInfo" + index.toString()}>
               <Skeleton  variant="rect" width={210} height={118} /> 
            </Box>)

    })}
  
  
</>)

  
};

export default SkeletonInfo;
