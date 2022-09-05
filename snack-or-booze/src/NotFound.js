import React from "react";
import {Link} from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

function NotFound() {
  return (
    <section>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
                404 - NOT FOUND!
            </h3>
            <p>Sorry! We can't find what you are looking for!</p>
            <p>Go Home or to your desired Food Menu</p>
          </CardTitle>
          <Link to="/">
              <Button>Home</Button>{' '}
            </Link>
          <Link to="/snacks">
              <Button>Snacks</Button>{' '}
            </Link>
            <Link to="/drinks">
              <Button>Drinks</Button>
            </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;
