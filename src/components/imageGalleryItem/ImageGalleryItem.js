import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegEye, FaRegCommentDots } from 'react-icons/fa';

import Modal from '../modal/Modal';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {

  state = {
    showModal: false,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    };
    
    render() {
        const { webformatURL, tags, likes, views, comments, largeImageURL } = this.props;
        const { showModal } = this.state;

        return (
          <li className={s.galleryItem}>
            <div className={s.photoCard}>
              <img
                className={s.galleryImg}
                src={webformatURL}
                alt={tags}
                onClick={this.toggleModal}
              />
              <div className={s.stats}>
                        <p className={s.statsItem}>
                            <FaRegThumbsUp style={{ marginRight: 8 }} />
                            <span className={s.statsNumber}>{likes}</span>
                        </p>
                        <p className={s.statsItem}>
                            <FaRegEye style={{ marginRight: 8 }} />
                            <span className={s.statsNumber}>{views}</span>
                        </p>
                        <p className={s.statsItem}>
                            <FaRegCommentDots style={{ marginRight: 8 }} />
                            <span className={s.statsNumber}>{comments}</span>
                        </p>
                    </div>
                </div>
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={tags} />
        )}
            </li>
        );
    }
}

export default ImageGalleryItem;