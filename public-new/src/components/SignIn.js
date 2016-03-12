import React, { Component, PropTypes } from 'react';

import mediator from '../mediator';

export default class extends Component {
  static contextTypes = {
    router: PropTypes.func.isRequired,
  };

  onSignIn() {
    FB.login(() => {
      mediator.emit('initLoad');
    }, { scope: 'public_profile, email' });
  }

  render() {
    return (
      <div className="uk-margin-large-top">
        <button
          onClick={::this.onSignIn}
          type="button"
          className="uk-width-1-1 uk-button uk-button-large uk-button-primary"
        >
          Sign In With Facebook
        </button>
      </div>
    );
  }
}
