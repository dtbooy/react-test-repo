import React, { useEffect, useState } from "react";

const CardInputForm = ({ setcardData }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
  });
  const handlerFormChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {setcardData(data);},[data]);
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          name="name"
          value={data.name}
          onChange={(e) => handlerFormChange(e)}
          type="text"
        />
        <label>Email</label>
        <input
          name="email"
          value={data.email}
          onChange={(e) => handlerFormChange(e)}
          type="email"
        />
        <label>LinkedIn</label>
        <input
          name="linkedIn"
          value={data.linkedIn}
          onChange={(e) => handlerFormChange(e)}
          type="text"
        />
        <label>Github</label>
        <input
          name="github"
          value={data.github}
          onChange={(e) => handlerFormChange(e)}
          type="text"
        />
      </form>
    </div>
  );
};

export default CardInputForm;
