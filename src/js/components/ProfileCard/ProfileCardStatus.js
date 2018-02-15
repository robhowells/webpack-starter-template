import React from 'react';

class ProfileCardStatus extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.props.toggleStatus();
  }

  render() {
    return (
      <div className="profile-card__status">
        <p className="profile-card__text">Status: <span data-status-text={this.props.status}>{this.props.status}</span></p>
        <button onClick={this.handleToggle}>Toggle availability</button>
      </div>
    )
  }
}

export default ProfileCardStatus;
