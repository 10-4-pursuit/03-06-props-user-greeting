import React from 'react';

function UserGreeting({username,age}) {
    
    return (
        <div>
            <h1>Welcome back {username}!</h1>
            <p>You are {age} years old.</p>
        </div>
    )
    }
export default UserGreeting;