import React, {Component} from "react";
import styled from "styled-components";
import Input from "./Input";
import BigInput from "./BigInput";
import Buttons from './Buttons';
import Axios from "axios";
import ROOT_URL from '../../config';





export default class Inputs extends Component {
      
      constructor(props) {
            super(props);

            this.state = {
                  name: "", email: "",
                  phone: "", title: "",
                  text: "", sent: false
            };

            this.sendItems = this.sendItems.bind(this);
      }

      getItems = (e) => {
            switch(e.target.id){
                  case "Sendandi":        this.setState({name: e.target.value});    break;
                  case "Email":               this.setState({email: e.target.value});     break;
                  case "Simanumer":     this.setState({phone: e.target.value});     break;
                  case "Titill":                this.setState({title: e.target.value});         break;
                  case "Texti":                this.setState({text: e.target.value});           break;
                  default: return
            }
      }

      async sendItems() {
            
            const {name, email, phone, title, text} = this.state;
            console.log({name}, {email}, {phone}, {title}, {text});
            const send = await Axios.post(`${ROOT_URL.slod}/email`, {
                  name, email, phone, title, text
            });

      }


  render() {
    return (
      <Container>
        <Input change={this.getItems} name="Sendandi" />
        <Input change={this.getItems} name="Email" />
        <Input change={this.getItems} name="Simanumer" />
        <Input change={this.getItems} name="Titill" />
        <BigInput change={this.getItems} name="Texti" />

        <Buttons sendItems={this.sendItems} clicks={this.props.clicks}/>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  color: white;
  overflow:hidden;
`;



