import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';
class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertSuccessVisible: false,
      alertFailureVisible: false,
      names: '',
      phone: '',
      email: '',
      message: '',
      guest_name: '',
      will_attend: '',
      use_shuttle: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userID = 'user_tMxXXkIPTSbBxvv05sm2e';
    const templateID = 'andie_and_steve_rsvp_form';
    const templateParams = {
      to_name: 'afarinac.14@gmail.com',
      names: this.state.names,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      guest_name: this.state.guest_name,
      will_attend: this.state.will_attend,
      use_shuttle: this.state.use_shuttle
    };
    emailjs.send('gmail', templateID, templateParams, userID).then(
      response => {
        console.log(templateParams);
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ alertSuccessVisible: true });
      },
      err => {
        console.log(templateParams);
        console.log('FAILED...', err);
        this.setState({ alertFailureVisible: true });
      }
    );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({
      alertSuccessVisible: false,
      alertFailureVisible: false,
      names: '',
      phone: '',
      email: '',
      message: '',
      guest_name: '',
      will_attend: '',
      use_shuttle: ''
    });
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
          Thank you, we have received your RSVP.
        </Alert>
        <Alert
          color="danger"
          isOpen={this.state.alertFailureVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Sorry, we encountered an error in sending your RSVP. Please email your
          RSVP to afarinac.14@gmail.com.
        </Alert>
        <FormGroup row>
          <Label for="names" md={3}>
            Name(s)
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="text"
              name="names"
              id="names"
              onChange={this.handleInputChange}
              value={this.state.names}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" md={3}>
            Phone Number
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="number"
              name="phone"
              id="phone"
              onChange={this.handleInputChange}
              value={this.state.phone}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" md={3}>
            Email
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row tag="fieldset">
          <Col md={12} className="row mb-auto mt-auto">
            <Label>Will you be attending our wedding?</Label>
            <div className="row mb-auto mt-auto">
              <label className="attendRadio">
                <input
                  name="will_attend"
                  type="radio"
                  id="radio"
                  checked={this.state.will_attend === 'Yes'}
                  onChange={this.handleInputChange}
                  value="Yes"
                  required
                  className="radioOption"
                />{' '}
                Will attend
              </label>

              <label className="attendRadio">
                <input
                  name="will_attend"
                  type="radio"
                  id="radio"
                  checked={this.state.will_attend === 'No'}
                  onChange={this.handleInputChange}
                  value="No"
                  required
                  className="radioOption"
                  style={{ marginLeft: '25px' }}
                />{' '}
                Unable to attend
              </label>
            </div>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="guest_name" md={3}>
            Your Guest's Name (Optional)
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="text"
              name="guest_name"
              id="guest_name"
              onChange={this.handleInputChange}
              value={this.state.guest_name}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Col md={12} className="row mb-auto mt-auto">
            <Label>
              We are providing shuttle buses for wedding guests from the Hyatt
              Regency to the Park Chateau at 10:20am, and from the Park Chateau
              to the Hyatt Regency at 5pm. In order for us to adequately
              prepare, please let us know if you intend on utilizing the shuttle
              buses.
            </Label>

            <div className="row mb-auto mt-auto">
              <label className="shuttleRadio ">
                <input
                  name="use_shuttle"
                  type="radio"
                  value="Yes"
                  checked={this.state.use_shuttle === 'Yes'}
                  onChange={this.handleInputChange}
                  id="radio"
                  required
                  className="radioOption"
                />{' '}
                Yes, my party will use the shuttle buses.
              </label>

              <label className="shuttleRadio">
                <input
                  name="use_shuttle"
                  type="radio"
                  value="No"
                  checked={this.state.use_shuttle === 'No'}
                  onChange={this.handleInputChange}
                  id="radio"
                  required
                  className="radioOption"
                />{' '}
                No, my party will not use the shuttle buses.
              </label>
            </div>
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="message" md={3}>
            Message (Optional)
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="textarea"
              name="message"
              id="message"
              rows="6"
              placeholder="Anything else you want to tell us, such as dietary restrictions, song requests, etc."
              onChange={this.handleInputChange}
              value={this.state.message}
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

export default RSVPForm;
