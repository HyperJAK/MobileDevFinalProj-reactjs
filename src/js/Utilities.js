export function ValidAlphaInput(input){
    const inputRegex = /^[a-zA-Z]+$/;
    const isValid = inputRegex.test(input);

    return isValid;
}

export function ValidPassword(pass){
    var passRegex = new RegExp('^((?=.*?[A-Za-z])(?=.*?[0-9]).{6,})*?$');
    const isValid = passRegex.test(pass);
    return isValid;

    /*
    * ^: Asserts the start of the string.
    (?=.*[A-Z]): Positive lookahead to ensure there is at least one uppercase letter.
    (?=.*\d): Positive lookahead to ensure there is at least one digit (number).
    (?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]): Positive lookahead to ensure there is at least one special character. Note: Modify the special characters within the square brackets if needed, and be cautious about characters that might be dangerous for SQL injection.
    .{8,}: Ensures that the total length of the password is at least 8 characters.
    $: Asserts the end of the string.
    * */

}


export function ValidEmail(email){

    var emailRegex = new RegExp(
        '^([a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z])*?$'
    );

    const isValid = emailRegex.test(email);

    return isValid;
}