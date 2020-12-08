class Logger {
    static log(msg) {
        console.log(msg);
    }
}

class Arithmatic {
    static multiply(x, y) {
        return x * y;
    }
    static divide(x, y) {
        return x / y;
    }
}

export default Logger;
export { Arithmatic };
