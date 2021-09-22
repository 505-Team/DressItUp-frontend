import React from "react";
import { Row, Col } from "react-bootstrap";
import StoreItem from "./StoreStuff/StoreItem";
import FilterForm from "./StoreStuff/FilterForm";
import AddToFavoriteModal from "./StoreStuff/AddToFavoriteModal";
import PageSwitcher from "./StoreStuff/PageSwitcher";
import axios from 'axios';
import "./StoreStuff/Store.css"
import AddRequestModal from "./StoreStuff/AddRequestModal";

class StorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      nameSearchTerm: "",
      searchTerm: "",
      dateSearchTerm: '',
      showAddedToFavoriteModal: false,
      favoritedPaintingName: "",
      storeItemsArr: [],
      showRequestModal: false,
      requestedPaintingName: ''
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

  changeSearchTerm = (text,name,date) => {
    this.setState({
      searchTerm: text,
      nameSearchTerm: name,
      dateSearchTerm: date
    });
    console.log(text,name,date)
  };
  closeAddedToRequestsModal=()=>{
    this.setState({
      showRequestModal: false
    })
  }

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

  addToRequests=(obj)=>{
    const url = `http://localhost:3010/addRequestedPainting`;

    this.setState({
      requestedPaintingName: obj.title,
      showRequestModal: true
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
        console.log("faced an error while adding a painting to requests page.");
      });
  }

  render() {
    return (
      <>
      <div className="divBackground">
      <p className="storeText">Explore the Finest Art.<br/> Here you can search, view and filter many pieces of Arts from around the Globe. We are committed to deliever Excllenece, also into connecting our Clients with many International Artists. </p>
      {console.log(this.props.userEmail)}
        <AddToFavoriteModal show={this.state.showAddedToFavoriteModal} 
        handleClose={this.closeAddedToFavoriteModal}
        favPaintingName={this.state.favoritedPaintingName}
        />
        <AddRequestModal show={this.state.showRequestModal} handleClose={this.closeAddedToRequestsModal} requestedPaintingName={this.state.requestedPaintingName}/>
        <div id="storeContainer">
        <Row id="storeParentRow">
          <Col sm={3}>
            <FilterForm changeSearchTerm={this.changeSearchTerm} />
          </Col>
          <Col sm={9}>
            <div id="storeItemsContainer">
            <Row Row xs={1} md={3} className="g-4" id="cardsRow">
            {/* <PageSwitcher pageNumber={this.state.pageNumber} increasePage={this.increasePage} decreasePage={this.decreasePage}/> */}
              {this.state.storeItemsArr.filter((val) => {
                if (this.state.searchTerm === "" && this.state.dateSearchTerm==="" &&this.state.nameSearchTerm==="") {
                  return val;
                } else if (
                  val.place_of_origin != null &&(
                  val.place_of_origin.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && val.date_display.toLowerCase().includes(this.state.dateSearchTerm.toLowerCase()) && val.title.toLowerCase().includes(this.state.nameSearchTerm.toLowerCase()))
                ) {
                  return val;
                }
              }).map((item) => {
                return <StoreItem item={item} addPainting={this.addPainting} isLoggedIn={this.props.isLoggedIn} email={this.props.userEmail} addToRequests={this.addToRequests}/>;
              })}
            </Row>
            </div>
              <PageSwitcher pageNumber={this.state.pageNumber} increasePage={this.increasePage} decreasePage={this.decreasePage}/>
          </Col>
        </Row>
        </div>
        </div>
      </>
    );
  }
}

export default StorePage;
