import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Row,Col } from "react-bootstrap";



class UserPaint extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {

        return (
            <>
               
                    <Row xs={1} md={2} className="g-4">
                        {this.props.favPaintAr.map( item => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                          
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
               

            </>)
    }
}
export default UserPaint;

