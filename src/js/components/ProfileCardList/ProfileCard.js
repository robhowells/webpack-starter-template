import React from 'react';
import ProfileCardImage from './ProfileCardImage';
import ProfileCardMeta from './ProfileCardMeta';
import ProfileCardStatus from './ProfileCardStatus';
import ProfileCardDelete from './ProfileCardDelete';

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
      <ProfileCardStatus />
      <ProfileCardDelete deletePofileCard={props.deletePofileCard}/>
      <hr/>
    </div>
  )
}

export default ProfileCard;
