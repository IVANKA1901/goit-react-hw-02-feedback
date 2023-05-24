import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Section.module.css';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={css.section}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
