import React from 'react';
import ReactDOM from 'react-dom';

class ProfileCardImage extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} alt={this.props.imageAlt} className="profile-card__image"/>
    )
  }
}

export default ProfileCardImage;
