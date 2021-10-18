import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { v4 } from "node-uuid";
import { Box } from "@material-ui/core";

const SelectonPost = (props) => {
  const arrayNbrs = [];
  for (let index = 1; index <= props.nubrSkeleton; index++) {
    arrayNbrs.push(index);
  }
console.log(v4());
  return (
    <>
      {arrayNbrs.map((index, number) => {
       return( <Box key={"box"+index} m={3} >
          <Skeleton  variant="text" />
          <Skeleton  width={40} height={40} />
          <Skeleton   width={210} height={118} />
        </Box>);
      })}
    </>
  );
};

export default SelectonPost;
