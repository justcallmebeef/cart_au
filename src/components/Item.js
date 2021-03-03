import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const itemsAPI = `http://localhost:3002/`;

export default function Item() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(itemsAPI)
      .then((items) => items.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {items?.map((item) => (
          <div className="col-sm" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item.item}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
