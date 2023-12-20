import React from 'react';

function UserGreeting(props) {
    const username = props.username 
    return<h1>Hello,{username}</h1>
}

export default UserGreeting;