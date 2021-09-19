import React from "react";
import { Button, Card, ListGroupItem, ListGroup } from "react-bootstrap";

class StoreItem extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      favorited: false,
      id: this.props.item.id,
      title: this.props.item.title,
      image_url: this.props.item.image_url,
      provenance_text: this.props.item.provenance_text,
      place_of_origin: this.props.item.place_of_origin,
      date_display: this.props.item.date_display,
      artist_display: this.props.item.artist_display
    }
  }

  favoriteThis=()=>{
    this.setState({
      favorited: true
    })
    const painting = {
      id: this.state.id,
      title: this.state.title,
      image_url: this.state.image_url,
      provenance_text: this.state.provenance_text,
      place_of_origin: this.state.place_of_origin,
      date_display: this.state.date_display,
      artist_display: this.state.artist_display
    }
    this.props.addPainting(painting);
  }
  unFavoriteThis=()=>{
    this.setState({
      favorited: false
    })
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="cardImage"
            variant="top"
            src={this.state.image_url}
          />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>
              <div class="col-sm-4 scroll">
                {this.state.provenance_text}
              </div>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date: {this.state.date_display}</ListGroupItem>
            <ListGroupItem>
              Place Of Origin: {this.state.place_of_origin}
            </ListGroupItem>
            <ListGroupItem>
              Artist Display: {this.state.artist_display}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button onClick={this.state.favorited ?this.unFavoriteThis:this.favoriteThis} variant="primary">
              {this.state.favorited ?<>Favorited</>:<>Add To Favorites</>}
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default StoreItem;
