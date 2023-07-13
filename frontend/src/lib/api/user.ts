import client from "lib/api/client"

import { UserData } from "interfaces/index"

export const getUsers = () => {
    return client.get<UserData[]>("/users")
  }
  
