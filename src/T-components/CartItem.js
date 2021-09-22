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
            .get(`https://world-of-art-backend.herokuapp.com/getRequestedItems?email=${user.email}`)
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

    alertHandler = () => {

        // alert('thank you');
        this.setState({
            showModal: false,
        })
    }

    removeHandler = () => {

    }



    render() {

        return (
            <div className="requestPage">
                <br></br>
                <h1 className="headerRequest"> Requested Paintings </h1>


                <Row Row xs={1} md={3} className='rowofitem'>

                    {this.state.requestedItemsArray.map(item => {
                        return (

                            <div className="wrapper">
                                <div className="container">
                                    <div className="top">
                                        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={item.image_url} />
                                    </div>
                                    <div className="bottom">
                                        <div className="left">
                                            <div className="details">
                                                <h1>Title: {item.title}</h1>
                                                {/* <p></p> */}
                                            </div>
                                            {/* <div className="buy"><i className="material-icons">add_shopping_cart</i></div>
                                        </div>
                                        <div className="right">
                                            <div className="done"><i className="material-icons">done</i></div>
                                            <div className="details">
                                                <h1>Chair</h1>
                                                <p>Added to your cart</p>
                                            </div>
                                            <div className="remove"><i className="material-icons">clear</i></div> */}
                                        </div>
                                    </div>
                                    <br></br>
                                    <Button className="purRemButton" onClick={this.showPurchaseModal} variant="primary">Confirm Request</Button>
                                    <br></br>

                                    <Button className="purRemButton" onClick={() => this.props.removePainting(item._id)} variant="primary"> Remove </Button>
                                </div>
                                <div className="inside">
                                    <div className="icon"><i className="material-icons">i</i></div>
                                    <div className="contents">
                                        <table>
                                            <tr>
                                                <th>Paint Details</th>
                                            </tr>
                                            <br></br>
                                            <tr>
                                                <td className='secondScroll'> {item.provenance_text}</td>
                                            </tr>
                                            <br></br>

                                            <tr className="dateInfo">
                                                <th> Date of Display: {item.date_display}</th>
                                                <th></th>
                                            </tr>
                                            <br></br>
                                            <tr className="originInfo">
                                                <td> Origin Place: {item.place_of_origin}</td>
                                                <td></td>
                                            </tr>
                                            <br></br>
                                            <tr className="artistInfo">
                                                <th >Artist Info: {item.artist_display}</th>
                                                <th></th>
                                            </tr>
                                            {/* <tr>
                                                <td>200mm</td>
                                                <td>200mm</td>
                                            </tr>
                                            <tr>
                                                <th>Something</th>
                                                <th>Something</th>
                                            </tr>
                                            <tr>
                                                <td>200mm</td>
                                                <td>200mm</td>
                                            </tr> */}
                                        </table>
                                    </div>
                                </div>

                            </div>

                        )
                    })}

                    <CartModal
                        show={this.state.showModal}
                        showPurchaseModal={this.showPurchaseModal}
                        close={this.close}
                        alertHandler={this.alertHandler}
                    />
                </Row>











                <div id='bigSpace'></div>

            </div>

        )
    }
}

export default withAuth0(CartItem);