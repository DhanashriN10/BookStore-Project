import axios from "axios";

export const login = (loginObj) => {
    let response= axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",loginObj)
    return response

    console.log("Login in process")
}

export const register = (registerObj) => {
     let response= axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",registerObj)
    
    return response

    console.log("Registration in process")
}
