export function ValidAlphaInput(input){
    const inputRegex = /^[a-zA-Z]+$/;
    const isValid = inputRegex.test(input);

    return isValid;
}

export function ValidEmail(email){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    return isValid;
}