import React from "react";
import { Button, Form } from "react-bootstrap";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFilter = (event) => {
    event.preventDefault();
    const placeOfOrigin = event.target.placeOfOriginText.value;
    const paintingName = event.target.paintingName.value;
    const dateOfCreation = event.target.dateOfCreationText.value

    this.props.changeSearchTerm(placeOfOrigin,paintingName,dateOfCreation);
  };

  render() {
    return (
      <>
        <div id="filerFormContainer">
          <Form onSubmit={this.submitFilter} id='filerForm'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Painting</Form.Label>
              <Form.Control type="text" placeholder="Haunted House, Woman Mending etc..." name="paintingName"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Place Of Origin</Form.Label>
              <Form.Control type="text" placeholder="China, France etc..." name="placeOfOriginText"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Creation</Form.Label>
              <Form.Control type="text" placeholder="1925, 1800 etc..." name="dateOfCreationText"/>
            </Form.Group>
            <Button variant="primary" type="submit" className='reactBlueButton'>
              Filter
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default FilterForm;
