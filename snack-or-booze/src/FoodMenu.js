import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  Col
} from "reactstrap";

//Generic food menu to show drinks or snacks depending on foodType being passed in
function FoodMenu({ food, foodType, title }) {

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
          {title} Menu
          </CardTitle>
          <CardText>
            Select your snack from the menu.
          </CardText>
          <ListGroup>
            {food.map(food => (
              <Link to={`/${foodType}/${food.id}`} key={food.id}>
                <ListGroupItem>{food.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Col>
            <Link to="/add-new-food">
              <Button>Add new {foodType}</Button>
            </Link>
          </Col>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
