import React from 'react';

const ProfileCardDelete = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.deletePofileCard(props.id);
  }
  return (
    <button className="profile-card__delete" onClick={handleClick}>
      Delete
    </button>
  )
}

export default ProfileCardDelete;
