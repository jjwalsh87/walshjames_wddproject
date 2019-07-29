import React, { Component } from "react";
import './adoption.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form'

class Adoption extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      search: "",
      value: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('you selected ' + this.state.value);
    event.preventDefault();
  }

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    fetch('https://api.thedogapi.com/v1/breeds?limit=100&page=0" ')
      .catch(() => console.log("error fetching data"))
      /*end fetch */
      .then(results => results.json())
      .then(data => this.setState({ data: data }));

  }
  render() {
    if (!this.state.data) {
      return <div />;
    }
    let breeds = this.state.data;
    let options = breeds.map(breeds => (
      <option key={breeds.name} value={breeds.name}>{breeds.name}</option>
    ));
    console.log({options})

    console.log();

    return (
      <Container fluid >
        <Form onSubmit={this.handleSubmit}>
          <Row className='justify-content-center'>
            <Col md="4">
            <label >
              Select Breed:
            </label>
            </Col>
            <Col md="4">
              <select onChange={this.handleChange}>{options}</select>
            </Col>
            <Col md="4">
            <input type="submit" value="Submit" />
            </Col>            
          </Row>
        </Form>
      </Container>
    );
  }
}
export default Adoption;
