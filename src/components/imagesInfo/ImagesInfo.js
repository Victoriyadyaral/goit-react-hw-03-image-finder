import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

import ImageGallery from '../imageGallery/ImageGallery';
import ImageErrorView from '../imageErrorView/ImageErrorView';
import ImagePendingView from '../imagePendingView/ImagePendingView';
import Button from '../button/Button';

import findImagesAPI from '../../services/findImages-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

 class ImagesInfo extends Component {
  state = {
    requestTerm: null,
    images: [],
    error: null,
    page: 1,
    status: Status.IDLE,
  };
       
   static propTypes = {
    requestTerm: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    images: PropTypes.array,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.requestTerm;
    const nextName = this.props.requestTerm;
      
    if (prevName !== nextName) {
      this.setState({
        status: Status.PENDING,
        page: 1,
      });
      
      findImagesAPI
      .fetchImage(this.props.requestTerm, this.props.page)
      .then(response => {
         this.setState(prevState => ({
          images: [ ...response.hits],
          page: prevState.page + 1,
          status: Status.RESOLVED,
        }));
        this.notify();
      }
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  
  findImages = () => {
    
    findImagesAPI
      .fetchImage(this.props.requestTerm, this.state.page)
      .then(response => {
         this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          page: prevState.page + 1,
          status: Status.RESOLVED,
        }));
        this.notify();
      }
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  notify = () => {
    if (this.state.images && this.state.images.length === 12) {
        toast.info('Your images found. Have a nice viewing')
    } else
      if (this.state.images.length === 0) {
        toast.error('No image has been found. Please enter your request again!');  
    }
  }

    render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div> <h2>What images or photos are you looking for?</h2></div>;
    }

    if (status === 'pending') {
        return  <ImagePendingView />;
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
        <ImageGallery images={images} />
        {images.length >11 && (
          <Button onClick={this.findImages} />
        )}
        </>
      )}
   }
};

export default ImagesInfo;