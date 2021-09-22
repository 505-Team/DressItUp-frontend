import React from "react";
import "./ShowOffCards.css";
import ArtGalleryImage from '../../images/artgallery.jpg';
import FavoriteArtsImage from '../../images/favoriteart.jpg'
import SubmitArtworkImage from '../../images/submitartwork.jpg'

class ShowOffCards extends React.Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>

        <h1 id='servicesHeader'>Our Services:</h1>
        <div class="container">
          <div class="cardCustom">
            <figure class="card__thumb">
              <img
                src={ArtGalleryImage}
                alt="Picture by Kyle Cottrell"
                class="card__image"
              />
              <figcaption class="card__caption">
                <h2 class="card__title">
                  Gallery Store
                </h2>
                <p class="card__snippet">
                  View Our Gallery and Art Store which has a massive collection of art pieces
                  from all around the world by Talented Artists!
                </p>
                <a href="/StorePage" class="card__button">
                  Visit
                </a>
              </figcaption>
            </figure>
          </div>

          <div class="cardCustom">
            <figure class="card__thumb">
              <img
                src={FavoriteArtsImage}
                alt="Picture by Nathan Dumlao"
                class="card__image"
              />
              <figcaption class="card__caption">
                <h2 class="card__title">
                  View Your Favorite Artworks
                </h2>
                <p class="card__snippet">
                  Our Platform offers you the ability to save art pieces and gallery into your
                  own favorite collection!
                </p>
                <a href="/Favorites" class="card__button">
                  View Favorites
                </a>
              </figcaption>
            </figure>
          </div>

          <div class="cardCustom">
            <figure class="card__thumb">
              <img
                src={SubmitArtworkImage}
                alt="Picture by Daniel Lincoln"
                class="card__image"
              />
              <figcaption class="card__caption">
                <h2 class="card__title">
                  Submit Your Artwork
                </h2>
                <p class="card__snippet">
                  Share your Hand-Crafted Artwork on our platform with
                  few clicks!
                </p>
                <a href="/PostPainting" class="card__button">
                  Submit Artwork
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </>
    );
  }
}

export default ShowOffCards;
