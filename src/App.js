import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
 
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/container/Container';
import Searchbar from './components/searchbar/Searchbar';
import ImagesInfo from './components/imagesInfo/ImagesInfo';

export default class App extends Component {
  state = {
    requestTerm: '',
    page: 1,
    image: [],
  };

  handleFormSubmit = newTerm => {
      this.setState({ requestTerm: newTerm,  page: 1, images: [] });
  }; 

  render() {
    
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo
          requestTerm={this.state.requestTerm}
          images={this.state.images}
          page={this.state.page}
        />
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