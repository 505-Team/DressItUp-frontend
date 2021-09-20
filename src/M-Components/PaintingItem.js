import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaintingItem.css';

class PaintingItem extends React.Component {
  render() {
    return (

      <div>
                        <style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
</style>

        <Row xs={1} md={3} className="rowofitem">
          {this.props.Painting.map(item =>
            <Col>
              <Card  >
                <Card.Body>
                <Card.Img style={{width:'100%' , height:'270px', objectFit:'cover'}} className='cardImage' variant="top" src={item.imgUrl}/>

                  <Card.Title>  {item.title}</Card.Title>

                  <Card.Text className='scrollstyle'>
                     {item.description}
                    {item.email}
                    </Card.Text>

                  <Card.Text>Date:  {item.painter}
                    </Card.Text>

                    <Card.Text>
                    Place of origin: {item.status}
                  </Card.Text>

                  <Card.Text>
                  Artist Display: {item.artistDisplay}
                  </Card.Text>


                </Card.Body>
                <Button className='buttondelet' variant="primary" onClick={() => this.props.deletePainting(item._id)}> Remove</Button>
                <Button className='buttondelet' variant="primary" onClick={()=>this.props.handelupdateForm(item)}>Edit</Button>
              </Card>
            </Col>
          )}</Row>

      </div>
    )
  }
}
export default PaintingItem;