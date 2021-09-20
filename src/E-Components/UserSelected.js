import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Row, Col,Button} from "react-bootstrap";
import './UserSelected.css';


class UserPaint extends React.Component {


    render() {

        return (
            <>
             <style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
</style>


                <Row xs={1} md={3} className="RowOFFav">
                    {this.props.favPaintData.map(item => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.image_url} style={{width:'100%' , height:'270px', objectFit:'cover'}}
                                    className="favImg"/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text className="favText">
                                        {item.provenance_text}
                            
                                    </Card.Text>
                                    <Card.Text>Date:  {item.date_display}
                                    </Card.Text>

                                    <Card.Text>
                                        Place of origin: {item.place_of_origin}
                                    </Card.Text>

                                    <Card.Text>
                                        Artist Display: {item.artist_display}
                                    </Card.Text>
                                </Card.Body>
                                <Button className='favRemove' variant="primary" onClick={() => this.props.deleteFavItemFun(item._id)}>Remove</Button>

                            </Card>
                        </Col>
                    ))}
                </Row>


            </>)
    }
}
export default UserPaint;

