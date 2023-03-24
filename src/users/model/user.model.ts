import { UserData } from "../data/user.data"

export type UserModel = {
    login: string,
    password: string,
    email: string
}

export function createUserModel (data: UserData): UserModel
{
    return {
        email: data.email,
        password: data.password,
        login: data.login
    }
}

// export function getRandomName (lenght: 20): string {//// перенести в отдельную папку 
//     return 
// }

//// убрать ненужные поля


///// пуш в GIT