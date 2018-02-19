import React from 'react';

const ProfileCardImage = (props) => {
  return (
    <img src={props.imageUrl} alt={props.imageAlt} className="profile-card__image"/>
  )
}

export default ProfileCardImage;
