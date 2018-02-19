import React from 'react';

const ProfileCardDelete = (props) => {
  console.log(props);
  return (
    <button className="profile-card__delete" onClick={props.deletePofileCard}>Delete</button>
  )
}

export default ProfileCardDelete;
