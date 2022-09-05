import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Col, Button } from "reactstrap";

function FoodItem({ items, cantFind, foodType }) {
  const { id } = useParams();

  let food = items.find(food => food.id === id);
  if (!food) return <Redirect to={cantFind} />

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic">{food.description}</CardText>
          <p>
            <b>Recipe:</b> {food.recipe}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
          <Col>
            <Link to={`/${foodType}`}>
              <Button>Back To Menu</Button>
            </Link>
          </Col>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
