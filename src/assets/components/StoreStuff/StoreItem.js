import React from "react";
import { Button, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./Store.css"


class StoreItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
      isLoggedIn: this.props.isLoggedIn,
    };
  }
  favoriteThis = () => {
    this.setState({
      favorited: true,
    });
    const painting = {
      id: this.props.item.id,
      title: this.props.item.title,
      image_url: this.props.item.image_url,
      provenance_text: this.props.item.provenance_text,
      place_of_origin: this.props.item.place_of_origin,
      date_display: this.props.item.date_display,
      artist_display: this.props.item.artist_display,
      email: this.props.email,
    };
    this.props.addPainting(painting);
  };
  unFavoriteThis = () => {
    this.setState({
      favorited: false,
    });
  };

  requestThis = () => {
    const requestedPainting = {
      id: this.props.item.id,
      title: this.props.item.title,
      image_url: this.props.item.image_url,
      provenance_text: this.props.item.provenance_text,
      place_of_origin: this.props.item.place_of_origin,
      date_display: this.props.item.date_display,
      artist_display: this.props.item.artist_display,
      email: this.props.email,
    };

    this.props.addToRequests(requestedPainting);
  }

  render() {
    return (
      <>
        <div className="cardBackground">
          <Card alignment='center' style={{ width: "16rem" }}>
            <Card.Img
              className="cardImage"
              variant="top"
              src={this.props.item.image_url}
            />
            <Card.Body >
              <Card.Title>{this.props.item.title}</Card.Title>
              <Card.Text>
                <div class="col-sm-4 scroll">
                  {this.props.item.provenance_text}
                </div>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> <svg className="Icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg> {this.props.item.date_display}</ListGroupItem>
              <ListGroupItem>
                <svg className="locationIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg> {this.props.item.place_of_origin}
              </ListGroupItem>
              <ListGroupItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                </svg> {this.props.item.artist_display}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              {this.state.isLoggedIn && (
                <Button
                  className='reactBlueButtonFav'
                  onClick={
                    this.state.favorited ? this.unFavoriteThis : this.favoriteThis
                  }
                  variant="primary"
                >
                  {this.state.isLoggedIn && this.state.favorited ? (
                    <>Favorited</>
                  ) : (
                    <>Add To Favorites</>
                  )}
                </Button>
              )}
            </Card.Body>
            <Card.Body>
              {this.state.isLoggedIn && (
                <Button onClick={this.requestThis}
                  variant="primary" className='reactBlueButtonRequest'>Request</Button>
              )}
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default StoreItem;
