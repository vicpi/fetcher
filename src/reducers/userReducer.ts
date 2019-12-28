import { SAVE_USER } from '../actions'
import { Action } from 'types'

export const userReducer = (state: any = {}, action: Action) => {
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