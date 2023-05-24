import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonList } from '../ButtonList/ButtonList';
import { ButtonItem } from '../ButtonItem/ButtonItem';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {options.map(option => (
          <ButtonItem
            key={option}
            name={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </ButtonList>
    );
  }
}
