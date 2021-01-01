export function concat(arrays) {
    if (arrays.length == 0) {
        return [];
    }

    let typedArrayConstructor = arrays[0].constructor;
    let length = arrays.length * arrays[0].length;

    let result = new typedArrayConstructor(length);
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            let index = calculateIndex(arrays, i, j);
            result[index] = arrays[i][j];
        }
    }
    return result;
}

export function calculateIndex(arrays, outerIndex, innerIndex) {
    if (outerIndex == 0) {
        return innerIndex;
    }

    let index = 0;
    for (let i = outerIndex - 1; i >= 0; i--) {
        index += arrays[outerIndex - 1].length;
    }
    index += innerIndex;
    return index;
}
