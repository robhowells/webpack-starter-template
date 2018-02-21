import React from 'react';
import PropTypes from 'prop-types';

class ProfileCardAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageValue: '',
      nameValue: '',
      emailValue: '',
      phoneValue: '',
      idValue: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      nameValue: e.target.value
    })
  }

  handleSubmit(e) {
    const newProfile = {
      image: 'TBC',
      name: this.state.nameValue,
      email: 'TBC',
      phone: 'TBC',
      id: `TBC`
    }
    e.preventDefault();
    this.props.addProfileCard(newProfile);
    this.setState({
      nameValue: ''
    })
  }

  render() {
    return (
      <form className="profile-card__add" onSubmit={this.handleSubmit}>
        <h2>Add new profile card </h2>
        <label htmlFor="name">Name</label>
        <input type="text" value={this.state.nameValue} onChange={this.handleInput} id="name"/>
        <button>Add profile card</button>
      </form>
    )
  }
}

ProfileCardAdd.propTypes = {
  addProfileCard: PropTypes.func.isRequired
};

export default ProfileCardAdd;
