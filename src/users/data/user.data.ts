import { PASSWORD } from "../../../credentials"
 const LOGIN = 'ignat1989'
 const EMAIL = 'givanovignat@gmail.com'
 const PUBLIC_PROFILE_NAME = 'Ignat Ivanov'
 const BIO = 'Text for testing Bio field'
 const UPDATE_POSITIVE_ALERT = 'Profile updated successfully'

 enum PronounsType {
    DO_NOT_SPECIFY = "Don't specify",
    THEY_THEM = "they/them",
    SHE_HER = "she/her",
    HE_HIM = "he/him",
    CUSTOM = "Custom"
 }

 type UserData = {
    login: string,
    password: string,
    email: string
   
}

const userData: UserData = {
    login: LOGIN,
    password: PASSWORD,
    email: EMAIL
}

export{
    userData,
    UserData,
    PronounsType
}