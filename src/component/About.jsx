import React from "react";
import Card from "react-bootstrap/Card";
import { Zoom } from "@material-ui/core";

function About() {
  return (
      <Zoom in={true}>
<Card
      className="col-md-8 col-sm-10 shadow mx-auto text-white p-1"
      style={{marginTop: "20px" }}
    >
      <Card.Img
        src="https://www.thespruce.com/thmb/l5NVzCxIZIi7gHl_2fAh3WGzJ_I=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basketball-court-852678264-5be780a446e0fb0026ebd1e3.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            Hi! My name is Sam! I have learned how to web develop from Udemy.com
            since January 2020. I have also taken an Android Developer
            Nanodegree from Udacity Back in 2018 and study IOS development from
            Udemy.com in 2019 while working as an accountant. I have been always
            fond of technology as I have taken apart desktops and search through
            and deleted suspicious registries. After learning how to code, I
            have gained a superpower. The superpower to create objects.
          </Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
      </Zoom>
    
  );
}

export default About;
