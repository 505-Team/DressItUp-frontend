import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ImageText.css";

class ImageText extends React.Component {
  render() {
    return (
      <>
        <div id="imageTextContainer">
          <Row>
            <Col sm={4}>
              <div id='imageText_textContainer'>
                <h1>Why Us ?</h1>
                <p>
                  Because We Provide our users a great platform that offers a big database of art pieces and artwork, with focus on ease of use and straight-to-the-point interface.
                  <br/> 
                  <br/> 
                  <br/> 
                  Not only that, but Also, the ability to share your work with others and get in contact with artists all over the world!
                </p>
              </div>
            </Col>
            <Col sm={8}>
              <img
                id="imageTextImage"
                src="https://images.wallpaperscraft.com/image/single/painting_paint_pencils_106712_1920x1080.jpg"
                alt="Painting tools"
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ImageText;
