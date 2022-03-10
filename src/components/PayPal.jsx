import React, { useState, useEffect, useRef } from "react";
import "../styles/dashboard.css";

// const ADDRESS = "http://localhost:3255";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const PayPal = ({ paymentDetails, setAlert, setHidePaypal, price, projectDetails, project, bidder }) => {
  const [madePayment, setMadePayment] = useState(false);

  const sendMail = async () => {
    console.log(project.Description);
    console.log(bidder);
    console.log(price);

    try {
      console.log(localStorage.getItem("id"));
      const details = {
        to: bidder.email,
        title: project.title,
        description: projectDetails,
        price: paymentDetails.total,
      };
      const response = await fetch(`${MY_APP_API_URL}/projects/sendmail/${bidder._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(details),
      });
      if (response.ok) {
        setAlert("emailSent");
        // alert("Confirmation email has been sent to freelancer");
        // setMadePayment(true);
        setHidePaypal(true);
      } else {
        setAlert("emailNotSent");
        alert("Confirmation email not sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: paymentDetails.title,
                amount: {
                  currency_code: "EUR",
                  value: paymentDetails.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setAlert("paymentMade");
          // alert("Payment made succesfully");
          setMadePayment(true);
          // sendMail();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalRef.current);
  }, [price, project.Description, setAlert, paymentDetails.title]);

  if (madePayment) {
    // alert("Time to hide paypal");
    sendMail();
    // setHidePaypal(true);
  } else {
    setAlert("paymentNotMade");
    console.log("Payment not made");
  }

  return (
    <>
      <div>
        <div ref={paypalRef}></div>
      </div>
    </>
  );
};
export default PayPal;
