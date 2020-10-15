import React from "react";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import logo from "./logo.svg";
import FetchData from './service/FetchData';
import "./style.css";

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    console.log(this.state)

    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
    });

}

changeRocket = rocket => {
  this.setState({
    rocket
  }, this.updateRocket);
}

  render() {
    console.log(this.state)
    return (
      <>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
      <Main rocket={this.state.rocket} />
      <Features rocket={this.state.rocket}/>
      <Footer />
      </>
    );
  }
}

export default App;
