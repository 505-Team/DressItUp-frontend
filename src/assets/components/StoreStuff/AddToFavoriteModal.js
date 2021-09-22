import React from "react";
import { Button, Modal } from "react-bootstrap";


class AddToFavoriteModal extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Added To Favorites!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Added "{this.props.favPaintingName}" to your favorites collection!</Modal.Body>
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

export default AddToFavoriteModal;
