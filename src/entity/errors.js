class Error {
    static #emptyError = { text: '', color: '' };

    static #Errors = {
        emptyEmail: { text: 'Email is required', color: "#FFF" },
        emptyPassword: { text: 'Password is required', color: "#B60000" },
        incorrectEmail: { text: 'Incorrect email format', color: "#8C0000" },
        invalidAuthenticated: { text: 'Invalid email or password', color: "#550000" },
        missingToken: { text: 'Token is missing', color: "#B60000" },
    };

    static errorKeys = {
        EMPTY_EMAIL: this.#Errors.emptyEmail,
        EMPTY_PASSWORD: this.#Errors.emptyPassword,
        INCORRECT_EMAIL: this.#Errors.incorrectEmail,
        NOT_AUTHENTICATED: this.#Errors.invalidAuthenticated,
        MISSING_TOKEN: this.#Errors.missingToken,
    };

    static getError = (key) => {
        const errorData = key || this.#emptyError;
        return { text: errorData.text, color: errorData.color };
    };
}
export { Error }