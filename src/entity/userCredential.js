class UserCredential {
    #userCredential = {
        email: '',
        password: '',
        role: '',
    }

    setUserCredential = (email, password, role) => {
        this.#userCredential = { email, password, role }
    }

    getUserCredential = () => {
        return { ...this.#userCredential }
    }
}
export { UserCredential }