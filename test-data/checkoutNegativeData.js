export const checkoutNegativeData = [
    {
        testName: 'Empty firstname',
        firstname: '',
        lastname: 'Waworuntu',
        postalcode: '112233',
        error: 'First Name is required'
    },
    {
        testName: 'Empty lastname',
        firstname: 'Ghea',
        lastname: '',
        postalcode: '112233',
        error: 'Last Name is required'
    },
    {
        testName: 'Empty postalcode',
        firstname: 'Ghea',
        lastname: 'Waworuntu',
        postalcode: '',
        error: 'Postal Code is required'
    },
    {
        testName: 'All field empty',
        firstname: '',
        lastname: '',
        postalcode: '',
        error: 'First Name is required'
    }
]