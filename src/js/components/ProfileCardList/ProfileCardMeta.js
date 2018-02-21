import React from 'react';

const createAltTag = (name) => `${name} profile image`;

const ProfileCardMeta = (props) => {
  return (
    <div className="profile-card__meta">
      <img src={props.image} alt={createAltTag(props.name)}/>
      <h4>Name: {props.name}</h4>
      <h4>Email: {props.email}</h4>
      <h4>Phone number: {props.phone}</h4>
    </div>
  )
}

export default ProfileCardMeta;
