import React from "react";
import "./profilepage.css";

const MyProfileCard = (props) => {
  return (
    <>
      <div className=" my-3  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div>{props.content}</div>
      </div>
    </>
  );
};
export default MyProfileCard;
