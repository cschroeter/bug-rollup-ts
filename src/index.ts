export interface User {
  name?: string
  age: number
}

export const myUser: User = { age: 30 }
console.log(myUser.name?.toString())
