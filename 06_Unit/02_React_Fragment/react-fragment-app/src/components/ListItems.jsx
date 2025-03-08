import { Fragment } from "react";
import React from "react";

const ListItems = ({ items }) => {
  return (
    // 1st method
    // <Fragment>
    //   {items.map((item, index) => (
    //     <li key={index}> {item}</li>
    //   ))}
    // </Fragment>

    //2nd method
    // <React.Fragment>
    //   {items.map((item, index) => (
    //     <li key={index}> {item}</li>
    //   ))}
    // </React.Fragment>

    // 3rd method and Mostly useable these days (latest)
    //Empty html tags
    <>
    {items.map((item, index) => (
        <li key={index}> {item}</li>
      ))}
    </>
  );
};

export default ListItems;
