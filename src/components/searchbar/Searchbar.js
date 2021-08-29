import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from "prop-types";

class Searchbar extends Component {
    state = {
        requestTerm: ''
    }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

    handleInputChange = (event) => {
        this.setState({ requestTerm: event.currentTarget.value });
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
            <header className="Searchbar">
                <form className="SearchForm" onSubmit = {this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <ImSearch style={{ marginRight: 8 }} />
                       <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                      className="SearchForm-input"
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      value={this.state.requestTerm}
                      onChange = {this.handleInputChange}                 
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;