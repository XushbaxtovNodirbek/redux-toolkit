const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) return "";
    if (!emailRegex.test(email)) return "invalid";
    return "valid";
};

export default emailValidation;
