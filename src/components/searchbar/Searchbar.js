import React, { Component } from 'react';
import { toast } from "react-toastify";
import { FaSearch } from 'react-icons/fa';
import PropTypes from "prop-types";

import s from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        requestTerm: '',
    };

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

    handleInputChange = (event) => {
        this.setState({ requestTerm: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.requestTerm.trim() === '') {
          toast.error('Sorry, that search term has no results. Please try an alternate search term.');
        return;
    }

        this.props.onSubmit(this.state.requestTerm);
        this.reset();
    };

    reset = () => {
        this.setState({ requestTerm: ''});
    }


    render() {
        return (
            <header className={s.searchbar}>
                <h1>Image-finder</h1>
                <div className={s.searchFormWrap}>
                <form className={s.searchForm} onSubmit = {this.handleSubmit}>
                    <input
                      className={s.searchFormInput}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      value={this.state.requestTerm}
                      onChange = {this.handleInputChange}                 
                     />
                        
                    <button type="submit" className={s.searchFormButton}>
                            <FaSearch
                                style={{ marginRight: 8 }}
                                color="rgb(90, 64, 90)"
                                size="30px"
                                aria-label="Search images" />
                    </button>
                    </form>
                    </div>
            </header>
        )
    }
}

export default Searchbar;