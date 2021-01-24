//Error on reading non-existent property
export function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw "ReferenceError: Property doesn't exist: \"" + prop + '"';
            }
        },
    });
}

export function arrayProxy(array) {
    return new Proxy(array, {
        get(array, index, receiver) {
            let convertedIndex = Number(index);
            if (convertedIndex < 0) {
                convertedIndex += array.length;
            }
            return Reflect.get(array, convertedIndex, receiver);
        },
    });
}

export function makeObservable(target) {
    /* your code */
    return new Proxy(target, {
        set(target, key, value, receiver) {
            console.log("SET " + key + " = " + value);
            return Reflect.set(target, key, value, receiver);
        },
    });
}
