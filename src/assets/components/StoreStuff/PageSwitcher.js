import React from "react";
import { Button, Card } from "react-bootstrap";

class PageSwitcher extends React.Component {
  render() {
    return (
      <>
        <div id="switcherContainer">
          <Card className="text-center">
            <Card.Header>Switch Page</Card.Header>
            <Card.Body>
              {this.props.pageNumber > 1 && <Button onClick={this.props.decreasePage} variant="outline-primary">Previous Page</Button>}
              &nbsp;&nbsp;&nbsp;
              <Button onClick={this.props.increasePage} variant="primary">Next Page</Button>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}

export default PageSwitcher;
