

const existingUser = { 
    userName: 'existingUser', 
    password: 'P@ssw0rd123' 
}

const badUser = {  
    userName: '',
    password: ''
}

const uniqueUserNameForDeleting = {
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

module.exports = { existingUser, badUser, uniqueUserNameForDeleting, uniqueUserNameForGetingInformation_1, uniqueUserNameForGetingInformation_2 }