import React from "react";
import { Button, Modal } from "react-bootstrap";


class AddRequestModal extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Request Successful!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Added "{this.props.requestedPaintingName}" to your requests collection!</Modal.Body>
          <Modal.Footer>
            <Button className='reactBlueButton' variant="primary" onClick={this.props.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddRequestModal;
