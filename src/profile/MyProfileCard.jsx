import React from "react";
import "./profilepage.css";

const MyProfileCard = (props) => {
  return (
    <>
      <div className=" my-3  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        {props.content}
      </div>
    </>
  );
};
export default MyProfileCard;