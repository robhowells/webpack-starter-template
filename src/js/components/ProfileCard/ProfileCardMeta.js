import React from 'react';

const ProfileCardMeta = (props) => {
  return (
    <div className="profile-card__meta">
      <h4>Name: {props.firstName} {props.lastName}</h4>
      <h4>DateBirth: {props.dateOfBirth}</h4>
      <h4>City: {props.city}</h4>
    </div>
  )
}

export default ProfileCardMeta;
