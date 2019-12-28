import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../types'
import { Fetcher } from '../services/fetchById'
import '../styles/index.css'

const App = () => {
	const users = useSelector((state: AppState) => state.users)
	const fetchUser = useCallback(() => {
		const fetcher = new Fetcher()
		fetcher.fetchById(1)
			.then(user => console.log('user', user))
	}, [])
	
	return (
		<div>
			<h1>Users</h1>
			<button onClick={fetchUser}>Fetch user</button>
			{Object.keys(users).map(key => <div key={key}>{users[key].fullName}</div>)}
		</div>
		)
	}
	
	export default App