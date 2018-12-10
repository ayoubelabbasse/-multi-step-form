import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormDelete from "./FormDelete";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: " ",
    lastName: "",
    adresse: ""
  };
  /*constructor() {
    super();
    this.state = {
      firstName: "ayoub"
    };
  }*/

  // procees to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  //handle feildds change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  delete = () => {
    const { step, firstName, lastName, adresse } = this.state;
    this.setState({
      step: 1,
      firstName: " ",
      lastName: "",
      adresse: ""
    });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, adresse } = this.state;
    const values = { step, firstName, lastName, adresse };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            step={this.step}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            step={this.step}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <FormDelete
            step={this.step}
            prevStep={this.prevStep}
            delete={this.delete}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
export default UserForm;
