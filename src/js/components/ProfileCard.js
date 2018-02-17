import React from 'react';
import ProfileCardImage from './ProfileCard/ProfileCardImage';
import ProfileCardMeta from './ProfileCard/ProfileCardMeta';
import ProfileCardStatus from './ProfileCard/ProfileCardStatus';

class ProfileCard extends React.Component {
  constructor() {
    super();
    this.state = {
      profileCards: []
    }
  }

  createProfileCard(item, index) {
    const profileCard = <div className="profile-card" key={this.generateKey('profile-card', index)}>
      <ProfileCardImage imageUrl={item.picture.medium} imageAlt={item.name.first}/>
      <ProfileCardMeta
        firstName={item.name.first}
        lastName={item.name.last}
        dateOfBirth={item.dob}
        city={item.location.city}
      />
      <ProfileCardStatus/>
      <hr/>
    </div>

    return profileCard;
  }

  getProfileData() {
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let profileCards = data.results.map((item, index) =>
        this.createProfileCard(item, index)
      );
      this.setState({
        profileCards: profileCards
      });
    })
  }

  componentDidMount() {
    this.getProfileData();
  }

  generateKey(name, index) {
    return `${name}-${index}`;
  }

  render() {
    return (
      <div className="profile-cards">
        {this.state.profileCards}
      </div>
    )
  }
}

export default ProfileCard;
