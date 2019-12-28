import { SAVE_USER } from '../actions'
import { UsersState, Action } from 'types'

export const userReducer = (state: UsersState = {}, action: Action) => {
  switch (action.type) {
    case SAVE_USER:
    return {
      ...state,
      [action.payload.user.id]: action.payload.user
    }
    default:
      return state
  }
}