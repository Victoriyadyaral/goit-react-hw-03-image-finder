//import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Container from './components/container/Container';
import Searchbar from './components/searchbar/Searchbar';

export default class App extends Component {
  state = {
    requestTerm: ''
  };

  handleFormSubmit = requestTerm => {
    this.setState({ requestTerm });
  };

  render() {
    return (
      <Container>
        <h1>What images are you looking for?</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </Container>
    );
  }
}
