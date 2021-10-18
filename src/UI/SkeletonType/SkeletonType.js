import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

const SkeletonType = (props) => {
  const arrayNbrs = [];
  for (let index = 0; index < props.nubrSkeleton; index++) {
    arrayNbrs.push(index);
  }


  return( <>
  
    {arrayNbrs.map((index , nbr) =>{

    return ( <Box mb={2} key={"selktInfo" + index.toString()}  className={props.style}>
               <Skeleton  variant={props.variant} width={props.width} height={props.height}/> 
            </Box>)

    })}
  
  
</>)

  
};

export default SkeletonType;
