import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class PaintingItem extends React.Component {
  render() {
    return (

      <div>

        <Row xs={1} md={3} className="g-4">
          {this.props.Painting.map(item =>
            <Col>
              <Card  style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={item.imgUrl}/>

                  <Card.Title>Name of the paint:  {item.title}</Card.Title>
                  <Card.Title>Painter name:  {item.painter}</Card.Title>

                  <Card.Text>
                    Description of the paint: {item.description}
                    {item.email}
                    </Card.Text>

                    <Card.Text>

                    Place of origin: {item.status}
                  </Card.Text>

                </Card.Body>
                <Button variant="primary" onClick={() => this.props.deletePainting(item._id)}> Delete</Button>
                <Button variant="primary" onClick={()=>this.props.handelupdateForm(item)}>Update Information</Button>
              </Card>
            </Col>
          )}</Row>

      </div>
    )
  }
}
export default PaintingItem;