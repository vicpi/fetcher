import { User } from '../types'

export const SAVE_USER = 'SAVE_USER'

export const saveUser = (user: User) => {
  return {
    type: SAVE_USER,
    payload: {
      user
    }
  }
}