import React from "react";
import {Card, Button} from 'react-bootstrap';
import ShowOffCards from './ShowOffCards'
import './GetStarted.css'

class GetStarted extends React.Component {

  goToTop=()=>{
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Card className="text-center">
          {!this.props.isLoggedIn && <Card.Body>
            <Card.Text>
              Have we caught your interests ? 
            </Card.Text>
            <Button variant="primary" onClick={this.goToTop}>Get Started Now!</Button>
          </Card.Body>}
          {this.props.isLoggedIn && <ShowOffCards/>}
        </Card>
      </>
    );
  }
}

export default GetStarted;
