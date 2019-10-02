import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import BigInput from "./BigInput";
import Buttons from "./Buttons";
import Axios from "axios";
import Breakpoints from "../Elements/breakpoints";

export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      title: "",
      text: "",
      nameFinish: false,
      emailFinish: false,
      phoneFinish: false,
      titleFinish: false,
      textFinish: false,
      sent: false,
      error: false
    };

    this.sendItems = this.sendItems.bind(this);
  }

  // Validate Name, must be >= 3 letters, name Finish is connected to SVG in Input.
  validateName = name => {
    if (name.length >= 3) {
      this.setState({ nameFinish: true });
    } else {
      this.setState({ nameFinish: false });
    }
  };
  // Validate Name, must be on the form: "email@email.is", nameEmail is connected to SVG in Input.
  validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      this.setState({ emailFinish: true });
    } else {
      this.setState({ emailFinish: false });
    }
  };
  // Validate Phone, must be seven numbers in a row., namePhone is connected to SVG in Input.
  validatePhone = phone => {
    let re1 = /^(?=(?:.{7})$)[0-9]*$/;
    if (re1.test(phone)) {
      this.setState({ phoneFinish: true });
    } else {
      this.setState({ phoneFinish: false });
    }
  };
  validateText = text => {
    if (text.length > 3) {
      this.setState({ textFinish: true });
    } else {
      this.setState({ textFinish: false });
    }
  };
  validateTitle = title => {
    if (title.length > 3) {
      this.setState({ titleFinish: true });
    } else {
      this.setState({ titleFinish: false });
    }
  };

  getItems = e => {
    switch (e.target.id) {
      case "Sendandi":
        this.validateName(e.target.value);
        this.setState({ name: e.target.value });
        break;
      case "Email":
        this.validateEmail(e.target.value);
        this.setState({ email: e.target.value });
        break;
      case "Simanumer":
        this.validatePhone(e.target.value);
        this.setState({ phone: e.target.value });
        break;
      case "Titill":
        this.validateTitle(e.target.value);
        this.setState({ title: e.target.value });
        break;
      case "Texti":
        this.validateText(e.target.value);
        this.setState({ text: e.target.value });
        break;
      default:
        return;
    }
  };

  async sendItems() {
    const {
      name,
      email,
      phone,
      title,
      text,
      nameFinish,
      emailFinish,
      phoneFinish,
      titleFinish,
      textFinish
    } = this.state;

    if (nameFinish && emailFinish && phoneFinish && titleFinish && textFinish) {
      await Axios.post(`http://pvs.is/email`, {
        name,
        email,
        phone,
        title,
        text
      })
        .then(res => {
          if (res.data) {
            this.setState({ sent: true });
          }
        })
        .catch(err => {
          this.setState({ sent: false });
        });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    let {
      nameFinish,
      emailFinish,
      phoneFinish,
      titleFinish,
      textFinish
    } = this.state;
    let Allow = false;
    if (nameFinish && emailFinish && phoneFinish && titleFinish && textFinish) {
      Allow = true;
    }
    return (
      <Container>
        {!this.state.sent && (
          <Yelp>
            <ColumnContainer>
              <Column>
                <Input
                  change={this.getItems}
                  name="Sendandi"
                  placeholder="Jón Jónsson"
                  done={this.state.nameFinish}
                  type="hidden"
                />
                <Input
                  change={this.getItems}
                  name="Email"
                  placeholder="jon@jon.is"
                  done={this.state.emailFinish}
                  type="hidden"
                />
                <Input
                  change={this.getItems}
                  name="Simanumer"
                  placeholder="8999999"
                  done={this.state.phoneFinish}
                  type="hidden"
                />
                <Input
                  change={this.getItems}
                  name="Titill"
                  done={this.state.titleFinish}
                  type="hidden"
                />
              </Column>
              <Column>
                <BigInput
                  change={this.getItems}
                  name="Texti"
                  done={this.state.textFinish}
                  type="hidden"
                />
              </Column>
            </ColumnContainer>
            <Buttons
              shouldISend={Allow}
              sendItems={this.sendItems}
              sent={this.state.sent}
              error={this.state.error}
              clicks={this.props.clicks}
            />
          </Yelp>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: inherit;
  justify-content: flex-start;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px;
`;
const ColumnContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${Breakpoints.landscape}px) {
    flex-direction: column;
  }
`;
const Yelp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
