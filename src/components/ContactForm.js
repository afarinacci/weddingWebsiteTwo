import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel: '',
      email: '',
      message: '',
      alertSuccessVisible: false,
      alertFailureVisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userID = 'user_tMxXXkIPTSbBxvv05sm2e';
    const templateID = 'andie-and-steve-contact-form';
    const templateParams = {
      to_name: 'afarinac.14@gmail.com',
      from_name: this.state.name,
      from_tel: this.state.tel,
      reply_to: this.state.email,
      message_html: this.state.message
    };
    emailjs.send('gmail', templateID, templateParams, userID).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ alertSuccessVisible: true });
      },
      err => {
        console.log('FAILED...', err);
        this.setState({ alertFailureVisible: true });
      }
    );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({ name: '', tel: '', email: '', message: '' });
  }
  onDismiss() {
    this.setState({ alertSuccessVisible: false, alertFailureVisible: false });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form mr-auto ml-auto">
        <Alert
          color="success"
          isOpen={this.state.alertSuccessVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Thank you, we have received for your message.
        </Alert>
        <Alert
          color="danger"
          isOpen={this.state.alertFailureVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Sorry, we encountered an error in sending your message. Please email
          your message to afarinac.14@gmail.com.
        </Alert>
        <FormGroup row>
          <Label for="contactName" md={2}>
            Name
          </Label>
          <Col md={10} className="mb-auto mt-auto">
            <Input
              type="text"
              name="name"
              id="contactName"
              onChange={this.handleInputChange}
              value={this.state.name}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contactTel" md={2}>
            Phone Number
          </Label>
          <Col md={10} className="mb-auto mt-auto">
            <Input
              type="number"
              name="tel"
              id="contactTel"
              onChange={this.handleInputChange}
              value={this.state.tel}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contactEmail" md={2}>
            Email
          </Label>
          <Col md={10} className="mb-auto mt-auto">
            <Input
              type="email"
              name="email"
              id="contactEmail"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contactMessage" md={2}>
            Message
          </Label>
          <Col md={10} className="mb-auto mt-auto">
            <Input
              type="textarea"
              name="message"
              id="contactMessage"
              rows="6"
              onChange={this.handleInputChange}
              value={this.state.message}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row className="">
          <Col className="text-center">
            <Button type="submit" color="primary" className="formBtn">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;
