import React from "react";

const UserGreeting = ({ username, style }) => {
  return (
    <div>
      <p style={style}>Hello, {username}!</p>
    </div>
  );
};

export default UserGreeting;
