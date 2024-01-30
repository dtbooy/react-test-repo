import React, { useState } from "react";
import CardInputForm from "./CardInputForm";
import BusinessCard from "./BusinessCard";

const Generator = () => {
  const [cardData, setcardData] = useState({name: "", email: "", linkedIn: "", github: ""});

  return (
    <div>
      Generator
      <CardInputForm setcardData={setcardData} />
      <BusinessCard cardData={cardData} />
    </div>
  );
};

export default Generator;
