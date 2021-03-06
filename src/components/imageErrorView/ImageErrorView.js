import PropTypes from 'prop-types';
import s from './ImageErrorView.module.css';
import errorImage from '../../image/errorImage.jpg';

export default function ImageErrorView({ message }) {
  return (
    <div role="alert" className={s.errorWrap}>
      <img src={errorImage} width="340" alt="error" />
      <p className={s.errorMessage}>Sorry, something went wrong. Error:{message}.</p>
    </div>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};