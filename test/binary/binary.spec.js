import { concat, calculateIndex } from "../../src/binary";
it("concat", () => {
    let chunks = [
        new Uint8Array([0, 1, 2]),
        new Uint8Array([3, 4, 5]),
        new Uint8Array([6, 7, 8]),
    ];
    let concatedChunks = concat(chunks);
    expect(Array.from(concatedChunks)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(concatedChunks.constructor.name).toBe("Uint8Array");
});

it("calculateIndex", () => {
    let arrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];
    let outerIndex = 2;
    let innerIndex = 2;
    expect(calculateIndex(arrays, outerIndex, innerIndex)).toBe(8);
});
