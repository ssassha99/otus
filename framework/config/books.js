

const existingUser = { 
    userName: 'existingUser', 
    password: 'P@ssw0rd123' 
}

const badUser = {  
    userName: '',
    password: ''
}

const uniqueUserName = {
    userName: 'user_' + Date.now(),
    password: 'P@ssw0rd123' + Date.now(),
}

const uniqueUserNameForGetingInformation_1 = {
    userName: 'user__' + Date.now(),
    password: 'P@ssw0rd123' + Date.now(),
}

const uniqueUserNameForGetingInformation_2 = {
    userName: 'user___' + Date.now(),
    password: 'P@ssw0rd123' + Date.now(),
}

const wrongPassword = {
    userName: 'user_' + Date.now(),
    password: '111111'
}

const wrongPasswordForExistingUser = { 
    userName: 'existingUser', 
    password: 'Wrong_P@ssw0rd123' 
}

module.exports = { existingUser, badUser, uniqueUserName, uniqueUserNameForGetingInformation_1, uniqueUserNameForGetingInformation_2, wrongPassword, wrongPasswordForExistingUser }