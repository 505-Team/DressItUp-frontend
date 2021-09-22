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
          {this.props.Painting.map(item => (

            <div className="wrapper3">
              <div className="container3">
                <div className="top3">
                  <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={item.imgUrl} />
                </div>
                <div className="bottom3">
                  <div className="left3">
                    <div className="details3">
                      <h1>Title: {item.title}</h1>
                      {/* <p></p> */}
                    </div>
                 
                  </div>
                </div>
                <br></br>

                <Button className='removeButton3' variant="primary" onClick={() => this.props.deletePainting(item._id)}> Remove</Button>
                <Button className='editButton3' variant="primary" onClick={() => this.props.handelupdateForm(item)}>Edit</Button>

                {/* <Button className="purRemButton" onClick={this.showPurchaseModal} variant="primary">Confirm Request</Button>
                <br></br>

                <Button className="purRemButton" onClick={() => this.props.removePainting(item._id)} variant="primary"> Remove </Button> */}
              </div>
              <div className="inside3">
                <div className="icon3"><i className="material-icons3">i</i></div>
                <div className="contents3">
                  <table>
                    <tr>
                      <th> Description</th>
                    </tr>
                    <br></br>
                    <tr>
                      <td className='secondScroll3'>  {item.description}</td>
                    </tr>
                    <br></br>

                    <tr className="dateInfo3">
                      <th> Date : {item.painter}</th>
                      <th></th>
                    </tr>
                    <br></br>
                    <tr className="originInfo3">
                      <td> Place of Origin : {item.status}</td>
                      <td></td>
                    </tr>
                    <br></br>
                    <tr className="artistInfo3">
                      <th >Artist Display : {item.artistDisplay}</th>
                      <th></th>
                    </tr>
           
                  </table>
                </div>
              </div>

            </div>

          ))}
          </Row>

      </div>
    )
  }
}
export default PaintingItem;



{/* <Col>
<Card  >
  <Card.Body>
    <Card.Img style={{ width: '100%', height: '270px', objectFit: 'cover' }} className='cardImage' variant="top" src={item.imgUrl} />

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
  <Button className='buttondelet' variant="primary" onClick={() => this.props.handelupdateForm(item)}>Edit</Button>
</Card>
</Col> */}