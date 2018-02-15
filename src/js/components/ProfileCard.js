import React from 'react';
import ProfileCardImage from './ProfileCard/ProfileCardImage';
import ProfileCardMeta from './ProfileCard/ProfileCardMeta';
import ProfileCardStatus from './ProfileCard/ProfileCardStatus';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Available'
    }

    this.toggleStatus = this.toggleStatus.bind(this);
  }

  toggleStatus() {
    this.setState(prevState => {
      let newStatus = prevState.status == 'Available' ? 'Unavailable' : 'Available';
      return {
        status: newStatus
      }
    });
  }

  render() {
    return (
      <div className="profile-card">
        <ProfileCardImage imageUrl="http://placehold.it/100x100" imageAlt="Profile image"/>
        <ProfileCardMeta name="Rob Howells" occupation="Front End Developer" bio="Lorem ipsum information about this person."/>
        <ProfileCardStatus status={this.state.status} toggleStatus={this.toggleStatus}/>
      </div>
    )
  }
}

export default ProfileCard;
