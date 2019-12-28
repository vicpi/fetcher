import { getStore } from '../store'
import { saveUser } from '../actions'
const USER_ENDPOINT = 'https://api.supercom.com/v1/users/'

interface IFetcher<T> {
  fetchById(id: number): Promise<T | undefined>
}

export const fetchById = (id: number) => {
  if (id <= 0) {
    return Promise.reject(new Error(`id should be greater than 0`))
  }
  
  return fetch(`${USER_ENDPOINT}${id}`)
  .then(response => {
    if (response.status < 200 || response.status >= 300) {
      return Promise.reject(new Error(response.statusText))
    }
    
    return response.json()
  })
  .then(user => {
    // Save to Redux state
    const store = getStore()
    store.dispatch(saveUser(user))

    return user
  })
}