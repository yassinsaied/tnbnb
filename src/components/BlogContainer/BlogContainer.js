import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LeftFormSearch from "../LeftFormSearch/LeftFormSearch";
import Pagination from "../../UI/Pagination/Pagination";
import ServiceAds from "../../services/AdsAPI"
import ListAd from "../ListAds/ListAds";
import "./BlogContainer.css";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const BlogContainer = () => {
  const classes = useStyles();
  let location = useLocation();
  const [listOfAds, setListOfAds] = useState([]);
  const [totaleItems, setTotalItems] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 12;
  const srchData = location.state;

  useEffect(() => {
    console.log(srchData)
    ServiceAds.searchAdHome(currentPage, itemPerPage, srchData).then((data) => {
   
      setListOfAds(data["hydra:member"]);
      setTotalItems(data["hydra:totalItems"]);
      
    })
     .catch((error) => console.log(error.response));
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const handelChangePage = (page) => {
    setcurrentPage(page);
  };
  

  return (
    <div className="blog-main">
      <div className="container main">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <LeftFormSearch searchData={srchData} />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
               
               
              <ListAd listAds ={listOfAds} />  
              <Pagination
                totaleItems={totaleItems}
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                changedPage={handelChangePage}
              />
              
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogContainer;
