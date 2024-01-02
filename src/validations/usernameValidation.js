const usernameValidation = (username) => {
    if (username.length === 0) return "";
    if (username.length < 4) return "invalid";
    return "valid";
};

export default usernameValidation;
