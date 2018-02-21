import React from 'react';

import ProfileCard from './ProfileCardList/ProfileCard';
import ProfileCardAdd from './ProfileCardList/ProfileCardAdd';

class ProfileCardList extends React.Component {
  constructor() {
    super();
    this.state = {
      profileCards: []
    }
    this.addProfileCard = this.addProfileCard.bind(this);
    this.deletePofileCard = this.deletePofileCard.bind(this);
  }

  getProfileData() {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        const profileCards = data.results.map((item, index) => {
          return {
            image: item.picture.medium,
            name: `${item.name.first} ${item.name.last}`,
            email: item.email,
            phone: item.cell,
            id: `profile-card-${index}`
          }
        })
        this.setState({
          profileCards: profileCards
        });
      })
      .catch(error => console.log(`Sorry there was an error. ${error}`))
  }

  componentDidMount() {
    this.getProfileData();
  }

  addProfileCard(newProfile) {
    this.setState(prevState => {
      return {
        profileCards: prevState.profileCards.concat(newProfile)
      }
    });
  }

  deletePofileCard(id) {
    this.setState(prevState => {
      const currentCards = prevState.profileCards;
      const filteredCards = currentCards.filter(item => item.id !== id);
      return {
        profileCards: filteredCards
      }
    });
  }

  render() {
    const profileCards = this.state.profileCards;
    return (
      <div>
        <h1>Profile cards</h1>
        {profileCards.map(item =>
          <ProfileCard
            item={item}
            key={item.id}
            addPofileCard={this.addProfileCard}
            deletePofileCard={this.deletePofileCard} />
        )}
        <ProfileCardAdd addProfileCard={this.addProfileCard} />
      </div>
    )
  }
}

export default ProfileCardList;
