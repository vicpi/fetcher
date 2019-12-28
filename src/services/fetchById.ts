import { getStore } from '../store'
import { saveUser } from '../actions'
import { User } from 'types'
import { USER_ENDPOINT } from '../config'

interface IFetcher<T> {
  fetchById(id: number): Promise<T | undefined>
}

export class Fetcher implements IFetcher<User> {
  fetchById = (id: number): Promise<User | undefined> => {
    if (id <= 0) {
      return Promise.reject(new Error(`id should be greater than 0`))
    }
    
    return fetch(`${USER_ENDPOINT}${id}`)
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        return Promise.reject(undefined)
        // Would be better to return an error with the status
        // but IFetcher interface provided in the task description
        // says that undefined should be returned
        // return Promise.reject(new Error(response.statusText))
      }
      
      return response.json()
    })
    .then(user => {
      // Save to Redux
      const store = getStore()
      store.dispatch(saveUser(user))
  
      return user
    })
  }
}
