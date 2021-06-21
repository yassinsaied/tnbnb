import React from 'react'
import AdCard from './AdCard/AdCard'

const ListAd = ({ listAds }) => {
  console.log(listAds)

  return (
    <div className="row list-ads">
      <h3>Featured Ads</h3>
      {listAds !== null &&
        listAds.map((ad, index) => {
          return <AdCard key={index} ad={ad} />
        })}
    </div>
  )
}

export default ListAd
