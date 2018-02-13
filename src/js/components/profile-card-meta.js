import React from 'react';
import ReactDOM from 'react-dom';

class ProfileCardMeta extends React.Component {
  render() {
    return (
      <div className="profile-card__meta">
        <h4>Name: {this.props.name}</h4>
        <h5>Occupation: {this.props.occupation}</h5>
        <p>Bio: {this.props.bio}</p>
      </div>
    )
  }
}

export default ProfileCardMeta;
