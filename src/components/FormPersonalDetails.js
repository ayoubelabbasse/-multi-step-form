import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: DodgerBlue;
  color: white;
  padding: 14px 20px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: right;
  &.modfStyle {
    background-color: #16d4bb;
  }
`;
const Title = styled.h1`
  text-decoration-color: black;
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
const A = styled.a`
  list-style-type: none;
  margin-top: 40px;
  padding: 0;
`;
const P = styled.p`
  text-align: center;
  font: 18px Arial, sans-serif;
`;

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    //next step is defined as a props in userform
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    //back step is defined as a props in userform
    this.props.prevStep();
  };
  render() {
    const {
      step,
      values: { firstName, lastName, adresse }
    } = this.props;

    return (
      <Form>
        <div>
          <Ul>
            <Li className="active">Step 1</Li>
            <Li className="active">Step 2</Li>
            <Li>Step 3</Li>
          </Ul>
        </div>
        <Title>Step :{step}</Title>

        <A className="info">
          <P className="infos">First Name :{firstName} </P>
          <P className="infos">Last Name :{lastName} </P>
          <P className="infos">Adresse :{adresse} </P>
        </A>

        <Button className="modfStyle" onClick={this.back}>
          Modifier
        </Button>

        <Button onClick={this.continue}>Continuer</Button>
      </Form>
    );
  }
}

export default FormPersonalDetails;
