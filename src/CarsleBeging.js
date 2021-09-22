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
        <Carousel id="topCarusel" fade>
          <Carousel.Item>
            <img
              src="https://images.wallpaperscraft.com/image/single/silhouette_art_sky_129925_1920x1080.jpg"
              alt="First slide"
              className="caruseImage"
            />
            <Carousel.Caption className="caruselCaption_m">Best Art Works</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://images.wallpaperscraft.com/image/single/child_river_dreams_127495_1920x1080.jpg"
              alt="Second slide"
              className="caruseImage"
            />

            <Carousel.Caption className="caruselCaption_m">Massive Library Of Art</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://images.wallpaperscraft.com/image/single/river_home_art_128746_1920x1080.jpg"
              alt="Third slide"
              className="caruseImage"
            />

            <Carousel.Caption className="caruselCaption_m">Share your Beautiful Hand-Crafted Work</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://images.wallpaperscraft.com/image/single/wolf_silhouette_hills_130119_1920x1080.jpg"
              alt="Fourth slide"
              className="caruseImage"
            />

            <Carousel.Caption className="caruselCaption_m">Easy to use Interface</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default CarsleBeging;
