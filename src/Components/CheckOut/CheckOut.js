
import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Load single data from Database
  useEffect(() => {
    fetch("https://hidden-forest-76924.herokuapp.com/checkout/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Sent data to order collection
  const handleOrderClick = () => {
    const orderDetails = {
      orderedBy: loggedInUser.displayName,
      orderOwnerEmail: loggedInUser.email,
      productName: product.name,
      quantity: 1,
      price: product.price,
      orderTime: new Date().toString(),
    };

    fetch("https://hidden-forest-76924.herokuapp.com/addOrderProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log("order place successfully");
        }
      });
  };

  return (
    <section className="container px-5 check-out-section">
      <article>
        <h2 className="mt-5">CheckOut</h2>
        <Table className="p-5" hover>
          <thead>
            <tr className="text-secondary">
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="border-top border-bottom">
            <tr>
              <td>{product.name}</td>
              <td>1</td>
              <td>${product.price}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td >Total</td>
              <td>1</td>
              <td>${product.price}</td>
            </tr>
          </tfoot>
        </Table>
        <Button onClick={handleOrderClick}
          variant="success"
          className="ml-auto d-block"
         
        >
          Checkout
        </Button>
      </article>
    </section>
  );
};

export default CheckOut;
