/* 
  Component to get the user input and fetching the 
  shuffled cards through API
*/
import React from 'react';
import axios from 'axios';
import { API_HOST } from "./config";
import Shuffle from './Shuffle';
import { Form,Button,Row,Col,Jumbotron } from 'react-bootstrap'
import swal from 'sweetalert';
class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: '',
      playing_cards:[],
      alert: null
    };
  }

  // Function to handle to form submit action
  handleFormSubmit = ( event ) => {
    event.preventDefault();
 
    if (isNaN(this.state.people) || this.state.people < 1) {
      swal("Invalid Input", "Number of People should be numeric", "error");
    }

    let formData = new FormData();
    formData.append('people', this.state.people)
    var self = this;
    axios({
        method: 'post',
        url: API_HOST+'/shuffle.php', // Calling the API to shuffle the deck
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        self.setState({playing_cards: response.data});
    })
    .catch(function (response) {
        //handle error
        console.log('error')
    });
}

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
    
  }
  render() {
    var self = this;
    return (
      <React.Fragment>
        <Jumbotron>
        <Row>
          <Col>
             <h1>Playing Card</h1>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group >
              <Form.Label>Enter the number of People</Form.Label>
              <Form.Control type="number" name='people' onChange={this.myChangeHandler} />
              <Form.Text className="text-muted">
                People should be numeric.
              </Form.Text>
              </Form.Group>
              <br/>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>           
          </Col>
          <Col>
            <p className="shuffle-padding">Shuffled Cards</p>
            <Shuffle playing_cards={self.state.playing_cards} />
          </Col>
        </Row>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Deck;