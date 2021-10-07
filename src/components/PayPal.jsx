import React, { useState, useEffect, useRef } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import "../styles/dashboard.css";

const PayPal = ({ setHidePaypal, price, projectDetails, project, user }) => {
  const [madePayment, setMadePayment] = useState(false);

  const sendMail = () => {
    console.log("email sent to freelancer");
  };

  const paypalRef = useRef();

  useEffect(() => {
    console.log(project.Description)
    console.log(user)
    console.log(price)
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
          alert("Payment made succesfully");
          sendMail();
          setMadePayment(true);
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (madePayment) {
    alert("Time to hide paypal");
    setHidePaypal(true);
  } else {
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
