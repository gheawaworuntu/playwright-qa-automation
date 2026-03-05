export const loginNegativeData = [
    {
        testName: 'Wrong password',
        username: 'standard_user',
        password: 'wrongpass',
        error: 'Username and password do not match any user in this service'
    },
    {
        testName: 'Wrong username',
        username: 'wrongusername',
        password: 'secret_sauce',
        error: 'Username and password do not match any user in this service'
    },
    {
        testName: 'Empty username',
        username: '',
        password: 'secret_sauce',
        error: 'Username is required' 
    },
    {
        testName: 'Empty password',
        username: 'standard_user',
        password: '',
        error: 'Password is required'
    },
    {
        testName: 'Both empty',
        username: '',
        password: '',
        error: 'Username is required'
    },
    {
        testName: 'Locked user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        error: 'Sorry, this user has been locked out'
    }
]