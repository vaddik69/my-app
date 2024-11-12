class BrowserStorage {
    static setItem(key, value) {
        localStorage.setItem(key, value);
    }

    static getItem(key) {
        localStorage.getItem(key);
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }
}
export { BrowserStorage }