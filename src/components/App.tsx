import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../types'
import { fetchById } from '../services/fetchById'
import '../styles/index.css'

const App = () => {
	const users = useSelector((state: AppState) => state.users)
	const fetchUser = useCallback(() => {
		fetchById(1)
			.then(user => console.log('user', user))
	}, [])
	
	return (
		<div>
			{Object.keys(users).map(key => <div key={key}>{users[key].fullName}</div>)}
			<h1>Hello World!</h1>
			<button onClick={fetchUser}>Fetch user</button>
		</div>
		)
	}
	
	export default App