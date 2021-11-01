import React, { useState, useEffect } from "react";
import FormSearchH from "../FormSearchH/FormSearchH";
import TextSlider from "../../UI/TextSlider/TexSlider";
import AdsCategory from "../AdsCategory/AdsCategory";
import ListAd from "../ListAds/ListAds";
import ServiceAds from "../../services/AdsAPI";
import Pagination from "../../UI/Pagination/Pagination";

import "./HomeContainer.css";

const HomeContainer = () => {
  const [listOfAds, setListOfAds] = useState([]);
  const [totaleItems, setTotalItems] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 12;
  useEffect(() => {
    ServiceAds.findAll(currentPage, itemPerPage)
      .then((data) => {
    
        setListOfAds(data["hydra:member"]);
        setTotalItems(data["hydra:totalItems"]);
      })

      .catch((error) => console.log(error.response));
  }, [currentPage]);

  const handelChangePage = (page) => {
    setcurrentPage(page);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "img/imageonline-co-darkenimage.jpg"
        }) `,
      }}
      className="site-blocks-cover">
      <div className="container main">
        <div className="row align-items-center justify-content-center text-center">
          <TextSlider />
          <FormSearchH />
          <AdsCategory />

          <ListAd listAds={listOfAds} titleListe="Featured Ads"/>
          <Pagination
            totaleItems={totaleItems}
            itemPerPage={itemPerPage}
            currentPage={currentPage}
            changedPage={handelChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
