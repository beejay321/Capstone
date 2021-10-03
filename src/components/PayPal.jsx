import React, { useState, useEffect, useRef } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import "../styles/dashboard.css";

const PayPal = ({ setHidePaypal }) => {
  const [madePayment, setMadePayment] = useState(false);

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "productDescription",
                amount: {
                  currency_code: "EUR",
                  value: "20.00",
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert("Payment made succesfully");
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
    console.log("there was an error");
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
