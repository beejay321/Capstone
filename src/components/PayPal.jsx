import React, { useState, useEffect, useRef } from "react";
import "../styles/dashboard.css";

const ADDRESS = "http://localhost:3255";

const PayPal = ({ paymentDetails, setAlert, setHidePaypal, price, projectDetails, project, bidder }) => {
  const [madePayment, setMadePayment] = useState(false);

  const sendMail = async () => {
    console.log("email sent to freelancer");
    try {
      console.log(localStorage.getItem("id"));
      const details = {
        to: bidder.email,
        title: project.title,
        description: projectDetails,
        price: price,
        // summary: project.summary,
      };
      const response = await fetch(`${ADDRESS}/projects/sendmail/${bidder._id}`, {
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
        setMadePayment(true);
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
    console.log(project.Description);
    console.log(bidder);
    console.log(price);
    console.log(paymentDetails);
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: project.Description,
                amount: {
                  currency_code: "EUR",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setAlert("paymentMade");
          // alert("Payment made succesfully");
          sendMail();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (madePayment) {
    setHidePaypal(true);
  } else {
    setAlert("paymentNotMade");
    console.log("Payment not successful");
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
