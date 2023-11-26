import {AES, enc} from "crypto-js";
import axios from "axios";

export function ValidAlphaInput(input){
    const inputRegex = /^[a-zA-Z]+$/;
    const isValid = inputRegex.test(input);

    return isValid;
}

export async function EncryptPassword(pass) {

    const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY;

    const plaintext = pass;
    const secretKey = encryptionKey;


    // Encrypt id
    const ciphertext = await AES.encrypt(plaintext, secretKey).toString();

    // Decrypt
    const bytes = await AES.decrypt(ciphertext, secretKey);
    const decryptedText = bytes.toString(enc.Utf8);

    return ciphertext;

}

export async function DecryptPassword(pass) {

    const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY;

    const plaintext = pass;
    const secretKey = encryptionKey;

    // Decrypt
    const bytes = await AES.decrypt(plaintext, secretKey);
    const decryptedText = bytes.toString(enc.Utf8);

    return decryptedText;

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


export async function SignInFunc(userInfo, setUser){

    try {
        const response = await axios.post(
            "http://localhost:4000/login",
            userInfo
        );

        const dbMail = response.data.data.email;
        const decryptedDbPass =  DecryptPassword(response.data.data.password);
        const decryptedLocalPass = DecryptPassword(userInfo.encryptedPass);

        if((decryptedDbPass === decryptedLocalPass) && (dbMail === userInfo.email)){

            const profilePicData = response.data.data.profilePic;

            const blob = new Blob([Buffer.from(profilePicData, 'base64')], { type: 'image/jpeg' });

            const imageUrl = URL.createObjectURL(blob);


            console.log("RESPONSESSSS")
            console.log(response.data.data)

            setUser((prevUser) => ({
                ...prevUser,
                id: response.data.data.id,
                username: response.data.data.username,
                email: response.data.data.email,
                password: response.data.data.password,
                profilePic: imageUrl
            }));


            alert(response.data.message)
        }


    }catch(error){
        alert(error.response.data.error);
    }

}


export async function SignUpFunc(userInfo, setUser) {

    try {
        const response = await axios.post(
            "http://localhost:4000/signup",
            userInfo
        );
        //console.log("RESPONSESSSS")
        //console.log(response.data.data)

        setUser((prevUser) => ({
            ...prevUser,
            id: response.data.data.id,
            username: response.data.data.username,
            email: response.data.data.email,
            password: response.data.data.password,
            profilePic: response.data.data.profilePic
        }));

        alert(response.data.message)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
    }
}