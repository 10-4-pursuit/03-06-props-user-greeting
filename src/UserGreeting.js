function UserGreeting(prop) {
    return <p>"Hello, { prop.username } !"</p>
}



export default UserGreeting;

// 2. Define `UserGreeting` as a functional component that takes a `username` prop.
// 3. Return a JSX element that displays a greeting, e.g., "Hello, [username]!".
// 4. Render `UserGreeting` in `App.js`, passing a sample username as a prop.