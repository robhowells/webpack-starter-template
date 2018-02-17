import React from 'react';

class ProfileCardStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Active'
    }

    this.toggleStatus = this.toggleStatus.bind(this);
  }

  toggleStatus() {
    this.setState(prevState => {
      let newStatus = prevState.status == 'Active' ? 'Inactive' : 'Active';
      return {
        status: newStatus
      }
    });
  }

  render() {
    return (
      <div className="profile-card__status">
        <p className="profile-card__text">Status: <span data-status-text={this.state.status}>{this.state.status}</span></p>
        <button onClick={this.toggleStatus}>Toggle availability</button>
      </div>
    )
  }
}

export default ProfileCardStatus;
