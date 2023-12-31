import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LandmarkCard.css';


import './LandmarkCard.css'; 

function LandmarkCard({name, desc, country, image, linkUrl, favorited, id, handleFavorite, deleteFavoriteLocation, deleteLocation}) {


  function handleClick() {
    fetch("http://127.0.0.1:6001/locations/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ favorited: !favorited })
    })
      .then(response => response.json())
      .then(data => {
        handleFavorite(data)

        if (data.favorited) {
          fetch("http://127.0.0.1:6001/favorites", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(postData => {
              console.log(postData)
            })
        } else {
          fetch("http://127.0.0.1:6001/favorites/" + id, {
            method: "DELETE"
          })
            .then(response => response.json())
            .then(() => {
              deleteFavoriteLocation(data)
            })
        }
      })

  }


  function handleDelete() {
    fetch("http://127.0.0.1:6001/locations/" + id, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
      fetch("http://127.0.0.1:6001/favorites/" + id, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(() => {
        deleteLocation(id)
      })
    })
  }

  return (
    <div className="cardStyle">
      <div>
        <h2>{name}</h2>
        <img className="cardImg" src={image} alt={name}></img>
        <h3>{country}</h3>
        <p>{desc}</p>
        <link href={linkUrl}></link>
        
      </div>
      <div className="btn-container">
        <button className="favButton" onClick={handleClick}>{favorited ? "♥ UNFAVORITE" : "♡ FAVORITE"}</button>
        <Link to={`/landmarks/${id}`}>View</Link>
        <button className="deleteButton" onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default LandmarkCard;
