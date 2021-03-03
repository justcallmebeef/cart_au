import React from "react";
import Table from "react-bootstrap/Table";

let cartItemsList = [];

export default function Cart() {
  let items = cartItemsList.map((item) => {
    return (
      <tbody>
        <tr>
          <th>{item}</th>
          <th>{item.price}</th>
          <th>{item.quantity}</th>
          <th>{item.price * item.quantity}</th>
        </tr>
      </tbody>
    );
  });
  return cartItemsList.length !== 0 ? (
    <Table bordered>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      {items}
    </Table>
  ) : (
    <h3>Your cart is empty.</h3>
  );
}
