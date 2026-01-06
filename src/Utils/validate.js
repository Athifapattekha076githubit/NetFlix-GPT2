export const checkValidateData = (email, password) =>{
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    // const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);

    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is incorrect";
    // if(!isNameValid) return "name is null";

    return null;
}