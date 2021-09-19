import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

class Modelpaint extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handelShowModel}>
                    <Modal.Header>
                        <Modal.Title>Add your painting</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>


                        <Form onSubmit={this.props.addPainting} >

                            <Form.Group className="mb-3" >
                                <Form.Label>Painter name</Form.Label>
                                <Form.Control type="text" name="painter" placeholder="Enter the name of painter" />

                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>The title of the painting</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter the title" />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Image of the paint</Form.Label>
                                <Form.Control type="img" name="imgUrl" placeholder="Enter the image of your paint" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Description of the painting</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter the description" />
                            </Form.Group>

                            <Form.Group className="mb-3" >

                                <Form.Label> Place of origin</Form.Label>
                                <Form.Control type="text" name="status" placeholder="Enter the Place of origin" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add the painting
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
        // alert('hi')
    }
}
export default Modelpaint;