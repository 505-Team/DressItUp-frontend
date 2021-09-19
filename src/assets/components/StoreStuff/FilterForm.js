import React from "react";
import { Button, Form } from "react-bootstrap";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFilter = (event) => {
    event.preventDefault();

    this.props.changeSearchTerm(event.target.placeOfOriginText.value);
  };

  render() {
    return (
      <>
        <div id="filerFormContainer">
          <Form onSubmit={this.submitFilter} id='filerForm'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Place Of Origin</Form.Label>
              <Form.Control type="text" placeholder="China, France etc..." name="placeOfOriginText"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Filter
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default FilterForm;
