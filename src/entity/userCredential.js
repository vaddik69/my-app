class UserCredential {
    static #userCredential = {
        email: '',
        password: '',
        role: '',
    }

    static setUserCredential = (email, password, role) => {
        this.#userCredential = { email, password, role }
    }

    static getUserCredential = () => {
        return { ...this.#userCredential }
    }
}
export { UserCredential }