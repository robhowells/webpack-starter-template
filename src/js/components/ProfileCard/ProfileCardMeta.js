import React from 'react';

class ProfileCardMeta extends React.Component {
  render() {
    return (
      <div className="profile-card__meta">
        <h4>Name: {this.props.firstName} {this.props.lastName}</h4>
        <h4>DateBirth: {this.props.dateOfBirth}</h4>
        <h4>City: {this.props.city}</h4>
      </div>
    )
  }
}

export default ProfileCardMeta;
