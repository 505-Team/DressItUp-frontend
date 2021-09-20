import React from 'react';
// import dummydata from '../assets/dummydata.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartModal from './CartModal';
import Row from 'react-bootstrap/Row';
import './CartItem.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react"





class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemFlag: false,
            showModal: false,
            requestedItemsArray: [],

        }
    }

    componentDidMount = () => {
        const { user } = this.props.auth0;
        axios
          .get(`http://localhost:3010/getRequestedItems?email=${user.email}`)
          .then(result => {
            this.setState({
                requestedItemsArray: result.data
            })
          })
          .catch(err => {
            console.log('error');
          })
      }

    showPurchaseModal = () => {
        this.setState({
            showModal: true,

        })


    }

    close = () => {
        this.setState({
            showModal: false
        })
    }

    alertHandler=()=>{

        // alert('thank you');
        this.setState({
            showModal: false,
        })
    }



    render() {

        return (

            <>
                <Row Row xs={1} md={3} className="g-4">

                    {this.state.requestedItemsArray.map(item => {
                        return (
                            <Card style={{ width: '15rem' }}>
                                <Card.Img className='purchasingCard' variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title> Title: {item.title} </Card.Title>
                                    <Card.Text>
                                        Date of Display: {item.date_display}
                                        <br></br>
                                        Artist Info: {item.artist_display};
                                        <br></br>
                                        <div className='secondScroll'>
                                        Painting Provenance: {item.provenance_text};
                                        <br></br>
                                        Origin Place: {item.place_of_origin};
                                        <br></br>
                                        Medium Material: {item.medium_display};
                                        <br></br>
                                        Fiscal Year: {item.fiscal_year};
                                        <br></br>
                                        Colorfulness: {item.colorfulness};
                                        </div>
                                        
                                    </Card.Text>
                                    <Button onClick={this.showPurchaseModal} variant="primary">Confirm Purchase</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    <CartModal
                        show={this.state.showModal}
                        showPurchaseModal={this.showPurchaseModal}
                        close={this.close}
                        alertHandler={this.alertHandler}
                    />
                </Row>
            </>
        )
    }
}

export default withAuth0(CartItem);