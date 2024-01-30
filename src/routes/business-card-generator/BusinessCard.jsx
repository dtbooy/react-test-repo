import React from "react";

const BusinessCard = ({cardData}) => {

    return (
      <div className="Card">
        <p>Name: {cardData.name}</p>
        <p>Email: {cardData.email}</p>
        <p>LinkedIn: {cardData.linkedIn}</p>
        <p>Github: {cardData.github} </p>
      </div>
    );
};

export default BusinessCard;
