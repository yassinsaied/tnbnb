import React from 'react'
import AdCard from './AdCard/AdCard'

const ListAd = ({ listAds , titleListe }) => {
  
  return (


    <div className="row list-ads">
      <h3 className="pb-2"> {titleListe}</h3>
      {listAds !== null &&
        listAds.map((ad, index) => {
          return <AdCard key={index} ad={ad} />
        })}
    </div>
  )
}

export default ListAd
