import React from 'react';
import ProfileCardImage from './ProfileCard/ProfileCardImage';
import ProfileCardMeta from './ProfileCard/ProfileCardMeta';
import ProfileCardStatus from './ProfileCard/ProfileCardStatus';

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <ProfileCardImage imageUrl="http://placehold.it/100x100" imageAlt="Profile image"/>
        <ProfileCardMeta name="Rob Howells" occupation="Front End Developer" bio="Lorem ipsum information about this person."/>
        <ProfileCardStatus/>
      </div>
    )
  }
}

export default ProfileCard;
