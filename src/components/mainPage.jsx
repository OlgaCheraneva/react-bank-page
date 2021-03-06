import React, { Component } from "react";
import Header from "./header";
import Payment from "./payment";
import CompanyInformation from "./companyInformation";
import Footer from "./footer";
import AdministratorPanel from "./administratorPanelComponents/administratorPanel";
import "../styles/mainPage.css";

class CardPayment extends Component {
  state = {
    companyName: "Tina Marie Interior Design"
  };
  render() {
    return (
      <React.Fragment>
        <Header companyName={this.state.companyName} />
        <Payment app={this.props.app} companyName={this.state.companyName} />
        <CompanyInformation companyName={this.state.companyName} />
        <Footer companyName={this.state.companyName} />
      </React.Fragment>
    );
  }
}

export default CardPayment;
