import React from 'react';
import ProfileCard from './ProfileCardList/ProfileCard';

class ProfileCardList extends React.Component {
  constructor() {
    super();
    this.state = {
      profileCards: []
    }
    this.deletePofileCard = this.deletePofileCard.bind(this);
  }

  getProfileData() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(profileCards => {
        this.setState({
          profileCards: profileCards.results
        });
      })
      .catch(error => console.log(`Sorry there was an error. ${error}`))
  }

  componentDidMount() {
    this.getProfileData();
  }

  generateKey(name, index) {
    return `${name}-${index}`;
  }

  deletePofileCard() {
    this.setState((prevState) => {
      return {
        profileCards: prevState.profileCards.slice(1)
      }
    })
  }

  render() {
    let cards = this.state.profileCards;
    return (
      <div>
        {cards.map((item, index) =>
          <ProfileCard item={item}
            key={this.generateKey('profile-card', index)}
            deletePofileCard={this.deletePofileCard}
          />
        )}
      </div>
    )
  }
}

export default ProfileCardList;
