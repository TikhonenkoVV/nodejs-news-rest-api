const emailRegex = {
    pattern: /^([A-Z0-9._%+-]{4,})+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
    message: "Invalid email address",
};
const passwordRegex = {
    pattern: /^[A-Z0-9!@#$%^&*]{8,16}$/i,
    message:
        "The password must consist only of Latin letters, numbers and special characters. The length of the password is from 8 to 16",
};

module.exports = {
    emailRegex,
    passwordRegex,
};
