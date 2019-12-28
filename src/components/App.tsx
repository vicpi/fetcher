import React from 'react';
import { fetchById } from '../services/fetchById'
import '../styles/index.css';

class App extends React.PureComponent {
	fetchUser = () => {
		fetchById(1)
			.then(user => console.log('user', user))
	}
	
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<button onClick={this.fetchUser}>Fetch user</button>
			</div>
		);
	}
}

export default App;