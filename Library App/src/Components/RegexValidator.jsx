/*username:/^[^\s@]+@[^\s@]$/
password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ */


export const usernameValidator = username => {
    const usernameRegex = /^[^\s@]+@[^\s@]$/;
    return usernameRegex.test(username)
}

export const passwordValidator = password => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}