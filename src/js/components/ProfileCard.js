import React from 'react';
import ProfileCardImage from './ProfileCard/ProfileCardImage';
import ProfileCardMeta from './ProfileCard/ProfileCardMeta';
import ProfileCardStatus from './ProfileCard/ProfileCardStatus';

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <ProfileCardImage imageUrl={props.item.picture.medium} imageAlt={props.item.name.first}/>
      <ProfileCardMeta
        firstName={props.item.name.first}
        lastName={props.item.name.last}
        dateOfBirth={props.item.dob}
        city={props.item.location.city}
      />
      <ProfileCardStatus/>
      <hr/>
    </div>
  )
}

export default ProfileCard;
