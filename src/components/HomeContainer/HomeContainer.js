import React, { useState, useEffect } from "react";
import FormSearchH from "../FormSearchH/FormSearchH";
import TextSlider from "../../UI/TextSlider/TexSlider";
import AdsCategory from "../AdsCategory/AdsCategory";
import ListAd from "../ListAds/ListAds";
import ServiceAds from "../../services/AdsAPI";
import Pagination from "../../UI/Pagination/Pagination";

import "./HomeContainer.css";

const HomeContainer = () => {
  const [lastAds, setLastAds] = useState([]);
  const [totaleItems, setTotalItems] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 12;
  useEffect(() => {
    ServiceAds.findAll(currentPage , itemPerPage)
      .then((data) => {
        setLastAds(data["hydra:member"]);
        setTotalItems(data["hydra:totalItems"]);
      })

      .catch((error) => console.log(error.response));
  }, [currentPage]);


  const handelChangePage = (page) => {
        setcurrentPage(page);
  }

  return (
    <div className="row align-items-center justify-content-center text-center">
      <TextSlider />
      <FormSearchH />
      <AdsCategory />

      <ListAd listAds={lastAds} />
      <Pagination
        totaleItems={totaleItems}
        itemPerPage={itemPerPage}
        currentPage={currentPage}
        changedPage={handelChangePage}
      />
    </div>
  );
};

export default HomeContainer;
