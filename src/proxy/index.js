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
