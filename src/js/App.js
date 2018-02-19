import React from 'react';
import ProfileCard from './components/ProfileCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profileCards: []
    }
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

  render() {
    let cards = this.state.profileCards;
    return (
      <div>
        {cards.map((item, index) =>
          <ProfileCard item={item} key={this.generateKey('profile-card', index)} />
        )}
      </div>
    )
  }
}

export default App;
