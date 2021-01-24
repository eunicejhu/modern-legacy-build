//Error on reading non-existent property
export function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (!target[prop]) {
                throw "ReferenceError: Property doesn't exist: \"" + prop + '"';
            } else {
                return target[prop];
            }
        },
    });
}
