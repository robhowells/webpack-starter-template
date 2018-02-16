import React from 'react';
import ProfileCardImage from './ProfileCard/ProfileCardImage';
import ProfileCardMeta from './ProfileCard/ProfileCardMeta';
import ProfileCardStatus from './ProfileCard/ProfileCardStatus';

class ProfileCard extends React.Component {
  constructor() {
    super();
    this.profileData = this.getProfilData();
  }

  getProfilData() {
    const data = [
      {
        name: 'Person 1 name',
        imageUrl: 'http://placehold.it/100x100',
        imageAlt: 'Person 1 profile image',
        occupation: 'Person 1 job title',
        bio: 'Person 1 bio. Lorem ipsum information about this person.'
      },
      {
        name: 'Person 2 name',
        imageUrl: 'http://placehold.it/100x100',
        imageAlt: 'Person 2 profile image',
        occupation: 'Person 2 job title',
        bio: 'Person 2 bio. Lorem ipsum information about this person.'
      },
      {
        name: 'Person 3 name',
        imageUrl: 'http://placehold.it/100x100',
        imageAlt: 'Person 3 profile image',
        occupation: 'Person 3 job title',
        bio: 'Person 3 bio. Lorem ipsum information about this person.'
      }
    ]
    return data;
  }

  generateKey(name, index) {
    return `${name}-${index}`;
  }

  render() {
    const profileCards = this.profileData.map((profileCard, index) =>
      <div className="profile-card" key={this.generateKey('profile-card', index)}>
        <ProfileCardImage imageUrl={profileCard.imageUrl} imageAlt={profileCard.imageAlt}/>
        <ProfileCardMeta name={profileCard.name} occupation={profileCard.occupation} bio={profileCard.bio}/>
        <ProfileCardStatus/>
        <hr/>
      </div>
    )
    return (
      <div className="profile-cards">
        {profileCards}
      </div>
    )
  }
}

export default ProfileCard;
