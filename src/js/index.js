import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCardImage from './components/profile-card-image';
import ProfileCardMeta from './components/profile-card-meta';
import '../scss/style.scss';

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <ProfileCardImage imageUrl="http://placehold.it/500x500" imageAlt="Profile image"/>
        <ProfileCardMeta name="Rob Howells" occupation="Front End Developer" bio="Lorem ipsum information about this person."/>
      </div>
    )
  }
}

const element = <ProfileCard/>;

ReactDOM.render(
  element,
  document.getElementById('app')
);
