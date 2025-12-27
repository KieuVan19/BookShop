const invalidEmailCases = [
    {
        title: "Missing domain",//done
        emailAddress: `account.${Date.now()}@`,
        // errorCheck: (validity) => validity.typeMismatch === true
        errorMessage: `Please enter a part following '@'. ${emailAddress} is incomplete.`

    },
    {
        title: "Missing @",//done
        emailAddress: `account.${Date.now()}.email.com`,
        // errorCheck: (validity) => validity.typeMismatch === true
        erorMessage: `Please include an '@' in the email address. '${this.emailAddress}' is missing an '@'.`
    },
    {
        title: "Missing local part",//done
        emailAddress: `@email.com`,
        // errorCheck: (validity) => validity.typeMismatch === true
        errorMessage: `Please enter a part followed by '@'. '${emailAddress}' is incomplete.`
    },
    // {
    //     title: "Missing top level domain", //Error: Please provide a valid email address.
    //     emailAddress: `account.${Date.now()}@email`,
    //     // errorCheck: (validity) => validity.typeMismatch === true
    // }
];

invalidEmailCases.map(email => email.erorMessage = `Please enter a part following '@'. ${emailAddress} is incomplete.`)