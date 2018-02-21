import React from 'react';

import ProfileCardMeta from './ProfileCardMeta';
import ProfileCardStatus from './ProfileCardStatus';
import ProfileCardDelete from './ProfileCardDelete';

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <ProfileCardMeta
        image={props.item.image}
        name={props.item.name}
        email={props.item.email}
        phone={props.item.phone} />
      <ProfileCardStatus />
      <ProfileCardDelete
        deletePofileCard={props.deletePofileCard}
        id={props.item.id} />
      <hr/>
    </div>
  )
}

export default ProfileCard;
