import React from "react";

const Breadcrumb = ({ options }) => (
  <ul className="breadcrumb">
    {
      options && options.map((option, index) =>
        <li key={index}>{option}</li>
      )
    }
  </ul>
);

export default Breadcrumb;
