import React from "react";
import { Row, Col } from "react-bootstrap";
import StoreItem from "./StoreStuff/StoreItem";
import FilterForm from "./StoreStuff/FilterForm";
import AddToFavoriteModal from "./StoreStuff/AddToFavoriteModal";
import PageSwitcher from "./StoreStuff/PageSwitcher";
import axios from 'axios';
import "./StoreStuff/Store.css"


class StorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      searchTerm: "",
      showAddedToFavoriteModal: false,
      favoritedPaintingName: "",
      storeItemsArr: []
    };
  }

  loadPage=()=>{
    const url = `http://localhost:3010/art?pageNumber=${this.state.pageNumber}`
    axios
      .get(url)
      .then(result => {
        this.setState({
          storeItemsArr: result.data,
        })
      })
      .catch(err => {
        console.log('error');
      })
    console.log(this.state.storeItemsArr);
  }
  componentDidMount = () => {
    this.loadPage();
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    })
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


  increasePage=(e)=>{
    e.preventDefault();
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    })
    this.loadPage();
    console.log(this.state.pageNumber);
  }
  decreasePage=(e)=>{
    e.preventDefault();
    if(this.state.pageNumber > 1){
      this.setState({
        pageNumber: this.state.pageNumber - 1,
      })
      this.loadPage();
      console.log(this.state.pageNumber);
    }
  }

  addPainting=(obj)=>{
    // const url = `https://ms-world-of-art-backend.herokuapp.com/favoritePainting`;
    const url = `http://localhost:3010/addFavoritePainting`;
    this.setState({
      favoritedPaintingName: obj.title,
      showAddedToFavoriteModal: true
    })

    axios
      .post(url, obj)
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
      {console.log(this.props.userEmail)}
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
            <PageSwitcher pageNumber={this.state.pageNumber} increasePage={this.increasePage} decreasePage={this.decreasePage}/>
              {this.state.storeItemsArr.filter((val) => {
                if (this.state.searchTerm === "") {
                  return val;
                } else if (
                  val.place_of_origin != null &&
                  val.place_of_origin
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map((item) => {
                return <StoreItem item={item} addPainting={this.addPainting} isLoggedIn={this.props.isLoggedIn} email={this.props.userEmail}/>;
              })}
              <PageSwitcher pageNumber={this.state.pageNumber} increasePage={this.increasePage} decreasePage={this.decreasePage}/>
            </Row>
          </Col>
        </Row>


        
      </>
    );
  }
}

export default StorePage;
