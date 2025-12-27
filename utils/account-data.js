export function generateAccountData() {
    const timestamp = Date.now();

    return {
        emailAddress: `user_${timestamp}@test.com`,
        password: `Password@${timestamp}`,
    };
}