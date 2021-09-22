import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Paints.css";

class Paint extends React.Component {
  render() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        </style>
        <Carousel className="carouselStyle" fade>
          <Carousel.Item className="itemCarousel">
            <img
              className="imgCarousel"
              src="https://media.timeout.com/images/103166739/750/562/image.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="captionStayl">
              <div className="textcontenar">
                <h3>The Starry Night, by: Vincent van Gogh</h3>
                <p>
                  The Starry Night was created by Van Gogh at the asylum in
                  Saint-Rémy, where he’d committed himself in 1889. Indeed, The
                  Starry Night seems to reflect his turbulent state of mind at
                  the time, as the night sky comes alive with swirls and orbs of
                  frenetically applied brush marks springing from the yin and
                  yang of his personal demons and awe of nature.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="itemCarousel">
            <img
              className="imgCarousel"
              src="https://www.salvador-dali.org/media/upload/cataleg_pintura/ALTA/0265.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="captionStayl">
              <div className="textcontenar">
                <h3>The Persistence of Memory, by: Salvador Dali</h3>
                <p>
                  The Persistence of Memory alludes to the influence of
                  scientific advances during Dali's lifetime. The stark yet
                  dreamlike scenery reflects a Freudian emphasis on the dream
                  landscape while the melted watches may refer to Einstein's
                  Theory of Relativity, in which the scientist references the
                  distortion of space and time.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="itemCarousel">
            <img
              className="imgCarousel"
              src="https://media.timeout.com/images/105222673/750/562/image.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="captionStayl">
              <div className="textcontenar">
                <h3>The Harvesters, by: Pieter Bruegel the Elder</h3>
                <p>
                  This composition was one of six created on the theme of the
                  seasons. The time is probably early September. A group of
                  peasants on the left cut and bundle ripened wheat, while the
                  on the right, another group takes their midday meal.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="itemCarousel">
            <img
              className="imgCarousel"
              src="https://media.timeout.com/images/105293264/750/562/image.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption className="captionStayl">
              <div className="textcontenar">
                <h3>
                  A Sunday Afternoon on the Island of La Grande Jatte, by:
                  Georges Seurat
                </h3>
                <p>
                  Seurat often made this milieu his subject, which differed from
                  the bourgeois portrayals of his Impressionist contemporaries.
                  Seurat abjured the capture-the-moment approach of Manet, Monet
                  and Degas, going instead for the sense of timeless permanence
                  found in Greek sculpture.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default Paint;
