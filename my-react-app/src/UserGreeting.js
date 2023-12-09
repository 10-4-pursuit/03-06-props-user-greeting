import React from 'react';

function UserGreeting(props) {
    return (
    <h1>Welcome back, {props.username}!</h1>
    );
}

export default UserGreeting