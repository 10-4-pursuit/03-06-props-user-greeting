import React from 'react';

const UserGreeting = ({ username }) => {
  return (
    <div>
      <p>Hello, {username}!</p>
    </div>
  );
};

export default UserGreeting;