import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

export default function Cart(cartList) {
  const [quantity, setQuantity] = useState(1);

  return cartList.cartList.length !== 0 ? (
    <Table bordered>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartList.cartList?.map((item) => (
          <tr>
            <td>{item.item}</td>
            <td>{item.price}</td>
            <td>
              <input
                type="number"
                min="0"
                onChange={(event) => setQuantity(event.target.value)}
                value={quantity}
              />
            </td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <h3>Your cart is empty.</h3>
  );
}
