import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
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

export default Home;
