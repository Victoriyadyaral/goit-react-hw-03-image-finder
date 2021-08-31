import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

import s from './Button.module.css'

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number,
  };

  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
        <button onClick={this.scroll} className={s.button} type="button">
        Load more
      </button>
    );
  }
}

export default Button;