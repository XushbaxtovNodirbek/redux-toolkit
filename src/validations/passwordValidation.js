const passwordValidation = (password) => {
    if (password.length === 0) return "";
    if (password.length < 8) return "invalid";
    return "valid";
};

export default passwordValidation;
