import React from "react";
import { Row, Col } from "react-bootstrap";
import DummyData from "../dummydata.json";
import StoreItem from "./StoreStuff/StoreItem";
import FilterForm from "./StoreStuff/FilterForm";
import AddToFavoriteModal from "./StoreStuff/AddToFavoriteModal";
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      showAddedToFavoriteModal: false,
      favoritedPaintingName: ""
    };
  }

  closeAddedToFavoriteModal=()=>{
    this.setState({
      showAddedToFavoriteModal: false
    })
  }

  changeSearchTerm = (text) => {
    this.setState({
      searchTerm: text,
    });
  };

  addPainting=(painting)=>{
    // const url = `https://ms-world-of-art-backend.herokuapp.com/favoritePainting`;
    const url = `INSERT LOCAL DATABASE LINK HERE!`;
    this.setState({
      favoritedPaintingName: painting.title,
      showAddedToFavoriteModal: true
    })
    console.log(this.state.favoritedPaintingName);
    axios
      .post(url, painting)
      .then((result) => {
        // this.setState({
        //   booksArr: result.data,
        // });
        console.log('successfuly sent data to backend!');
      })
      .catch((err) => {
        console.log("faced an error while adding a painting to favorites.");
      });
  }

  render() {
    return (
      <>
        <h1>THIS IS A STORE PAGE!!!</h1>
        <AddToFavoriteModal show={this.state.showAddedToFavoriteModal} 
        handleClose={this.closeAddedToFavoriteModal}
        favPaintingName={this.state.favoritedPaintingName}
        />
        <Row id="storeParentRow">
          <Col>
            <FilterForm changeSearchTerm={this.changeSearchTerm} />
          </Col>
          <Col xs={9}>
            <Row Row xs={1} md={3} className="g-4" id="cardsRow">
              {DummyData.filter((val) => {
                if (this.state.searchTerm === "") {
                  return val;
                } else if (
                  val.place_of_origin
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map((item) => {
                return <StoreItem item={item} addPainting={this.addPainting}/>;
              })}
            </Row>
          </Col>
        </Row>


        
      </>
    );
  }
}

export default App;
