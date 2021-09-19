import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'




class UpdatePaint extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>Update Information </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.updatePainting} >
                            <Form.Group className="mb-5" >
                                <Form.Label>The title of the paint</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={this.props.title} />

                            </Form.Group>

                            <Form.Group className="mb-5" >
                                <Form.Label>Painter name</Form.Label>
                                <Form.Control type="text" name="painter" defaultValue={this.props.painter} />

                            </Form.Group>


                            <Form.Group className="mb-5" >
                                <Form.Label>Image of the paint</Form.Label>
                                <Form.Control type="img" name="imgUrl" defaultValue={this.props.imgUrl} />
                            </Form.Group>


                            <Form.Group className="mb-5" >
                                <Form.Label>Description of the paint</Form.Label>
                                <Form.Control type="text" name="description" defaultValue={this.props.description} />
                            </Form.Group>
                            <Form.Group className="mb-5" >

                                <Form.Label>Place of origin</Form.Label>
                                <Form.Control type="text" name="status" defaultValue={this.props.status} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update paint information
                            </Button>
                        </Form>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>


                    </Modal.Footer>
                </Modal>




            </div>
        );
    }
}

export default UpdatePaint;