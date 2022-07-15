import React from "react";
import { Table } from "react-bootstrap";
// import "./dashboard.css";
import Edit from "./Edit";

const MyBids = (props) => {
  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className="mx-2 d-flex justify-content-between">
          <h4>{props.title}</h4>
          {localStorage.getItem("id") === props.user._id ? <Edit title={props.title} /> : ""}
        </div>
        <hr className=" my-2 " />
        {props.myBids ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Projects</th>
                  <th>Client</th>
                  <th>Decision</th>
                  <th>Status</th>
                </tr>
              </thead>
              {props.myBids.map((b, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{b.projectTitle}</td>
                    <td>#</td>
                    <td>Approved</td>
                    <td>Confirmed</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <div className="  mt-5 d-flex justify-content-center ">
            <p>No Bids Yet</p>
          </div>
        )}
      </div>
    </>
  );
};
export default MyBids;
