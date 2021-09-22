import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NestedImage.css";
import image from "../../images/young-blonde-woman-painting-with-acrylics.jpg";

class NestedImage extends React.Component {
  render() {
    return (
      <>
        <div class="strip"></div>
        <div id="nestedImageContainer">
          <Row>
            <Col sm={3}>
              <div id="nestedImageFirstDiv"></div>
            </Col>
            <Col sm={9}>
              {" "}
              <div id="nestedImageSecondDiv"></div>
            </Col>
          </Row>
          <img src={image} alt="yoda" id="nestedImage" />
          <div id="nestedImageText_musab">
            <h1>why Art Is Important ?</h1>
            <p>
              Perhaps the simplest answer to this question is that art touches
              us emotionally. Art is powerful because it can potentially
              influence our culture, politics, and even the economy. When we see
              a powerful work of art, you feel it touching deep within your
              core, giving us the power to make real-life changes. In the words
              of Leo Tolstoy:
              <br/>
              <br/>
              "The activity of art is based on the capacity of people to infect others with their own emotions and to be infected by the emotions of others. Strong emotions, weak emotions, important emotions or irrelevant emotions, good emotions or bad emotions – if they contaminate the reader, the spectator, or the listener – it attains the function of art."
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default NestedImage;
