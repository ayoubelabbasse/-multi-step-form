import React, { Component } from "react";
import styled from "styled-components";
import UserForm from "./UserForm";

const Button = styled.button`
  background-color: DodgerBlue;
  color: white;
  padding: 14px 20px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: right;
`;
const Title = styled.h1`
  text-decoration-color: black;
`;

const Label = styled.label`
  font: 16px Arial, sans-serif;
  display: inline-block;
  margin-bottom: 4px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Form = styled.form`
  padding: remy(32px);
  margin-left: 350px;
  margin-right: 350px;
  background-color: #fff;
  border-radius: 5px;
`;
const Ul = styled.ul`
  list-style-type: none;
  margin-top: 40px;
  padding: 0;
  overflow: hidden;
`;
const Li = styled.li`
  text-align: center;
  float: left;
  width: 33.33%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: 0%;
  }
  &::before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 2px solid #ddd;
    background-color: white;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    z-index: 1;
  }
  &.active {
    color: DodgerBlue;
  }
`;

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    //next step is defined as a props in userform
    this.props.nextStep();
  };
  render() {
    const { step, values, handleChange } = this.props;

    return (
      <Form>
        <div>
          <Ul>
            <Li className="active">Step 1</Li>
            <Li>Step 2</Li>
            <Li>Step 3</Li>
          </Ul>
        </div>
        <Title>Step :{step}</Title>
        <br />
        <Label>First Name :</Label>
        <br />

        <Input
          placeholder="Enter your First Name"
          type="text"
          value={values.firstname}
          onChange={handleChange("firstName")}
        />
        <br />

        <Label>Last Name :</Label>
        <br />
        <Input
          placeholder="Enter your Last Name"
          type="text"
          value={values.lastname}
          onChange={handleChange("lastName")}
        />
        <br />
        <Label>Adresse :</Label>
        <br />

        <Textarea
          placeholder="Enter your Address"
          type="text"
          value={values.adresse}
          onChange={handleChange("adresse")}
        />
        <br />
        <Button onClick={this.continue}>Next</Button>
      </Form>
    );
  }
}

export default FormUserDetails;
