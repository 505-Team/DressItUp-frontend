import React from "react";
import Carousel from "react-bootstrap/Carousel";

class CarsleBeging extends React.Component {
  render() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        </style>
        <Carousel id="topCarusel" fade >
          <Carousel.Item>
            <img
              src="https://m.media-amazon.com/images/I/91TN+nabSWL._AC_SL1500_.jpg"
              alt="First slide"
              className='caruseImage'
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://cdn.pixabay.com/photo/2014/12/09/21/01/still-life-562357_960_720.jpg"
              alt="Second slide"
              className='caruseImage'
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://cdn.pixabay.com/photo/2013/02/14/03/51/painting-81504_960_720.jpg"
              alt="Third slide"
              className='caruseImage'
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1579541764764-6401d4100dd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt="Fourth slide"
              className='caruseImage'
            />

            <Carousel.Caption>
 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default CarsleBeging;
