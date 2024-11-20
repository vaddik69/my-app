class UserCredential {
    static #credentials = [];

    constructor(email = '', password = '', role = '') {
        this.email = email;
        this.password = password;
        this.role = role;

        UserCredential.#credentials.push(this);
    }

    setUserCredential(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getUserCredential() {
        return {
            email: this.email,
            password: this.password,
            role: this.role
        };
    }

    removeUserCredential() {
        UserCredential.#credentials.splice(this)
    }

    static findByCredentials(email, password, role) {
        return UserCredential.#credentials.find(
            (instance) => 
                instance.email === email && 
                instance.password === password &&
                instance.role === role
        ) || null;
    }

    static getAllCredentials() {
        return UserCredential.#credentials;
    }
}
export { UserCredential }