import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Button } from "react-bootstrap";
import "./UserSelected.css";

class UserPaint extends React.Component {
  render() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        </style>
        <div id='favoritesContainer'>
        <Row xs={1} md={4} className="RowOFFav">
          {this.props.favPaintData.map((item) => (
            <div className="wrapper2">
              <div className="container2">
                <div className="top2">
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    src={item.image_url}
                  />
                </div>
                <div className="bottom2">
                  <div className="left2">
                    <div className="details2">
                      <h1>Title: {item.title}</h1>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
                <br></br>
                <Button
                  className="deleteFavCard2"
                  variant="primary"
                  onClick={() => this.props.deleteFavItemFun(item._id)}
                >
                  Remove
                </Button>
              </div>
              <div className="inside2">
                <div className="icon2">
                  <i className="material-icons2">i</i>
                </div>
                <div className="contents2">
                  <table>
                    <tr>
                      <th>Paint Details</th>
                    </tr>
                    <br></br>
                    <tr>
                      <td className="secondScroll2"> {item.provenance_text}</td>
                    </tr>
                    <br></br>

                    <tr className="dateInfo2">
                      <th> Date of Display: {item.date_display}</th>
                      <th></th>
                    </tr>
                    <br></br>
                    <tr className="originInfo2">
                      <td> Origin Place: {item.place_of_origin}</td>
                      <td></td>
                    </tr>
                    <br></br>
                    <tr className="artistInfo2">
                      <th>Artist Info: {item.artist_display}</th>
                      <th></th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </Row>
        </div>
      </>
    );
  }
}
export default UserPaint;

// <Col>
//     <Card >
//         <Card.Img variant="top" src={item.image_url} style={{width:'100%' , height:'200px', objectFit:'cover'}}
//             className="favImg"/>
//         <Card.Body>
//             <Card.Title className='titleInFav'>{item.title}</Card.Title>

//             <Card.Text className="favText">
//                 {item.provenance_text}

//             </Card.Text>
//             <Card.Text>Date:  {item.date_display}
//             </Card.Text>

//             <Card.Text>
//                 Place of origin: {item.place_of_origin}
//             </Card.Text>

//             <Card.Text>
//                 Artist Display: {item.artist_display}
//             </Card.Text>
//         </Card.Body>
//

//     </Card>
// </Col>
