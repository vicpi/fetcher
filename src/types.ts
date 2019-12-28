export interface User {
  id: number
  fullName: string
  birthDate: string
  enabled: number
}

export interface saveUserAction {
  type: string,
  payload: {
    user: User
  }
}

export type Action = saveUserAction