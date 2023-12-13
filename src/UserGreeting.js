import React from "react";

const UserGreeting = ({ username }) => {
	const greetingStyle = {
		dispay: 'flex',
		fontSize:'50%',
		marginTop: '50px',
	}
	return (
	<div style={greetingStyle}>
	<p>Hello, {username}!</p>;
	</div>
	);
};



export default UserGreeting;