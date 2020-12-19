import Hamster from "../src/Hamster";

describe("Hamster", () => {
    let lazy, speedy;
    beforeAll(() => {
        lazy = new Hamster("lazy");
        speedy = new Hamster("speedy");
    });
    it("lazy's keys", () => {
        expect(Object.keys(lazy)).toEqual(["stomach", "activities", "name"]);
        expect(Object.keys(lazy)).not.toContain("timer");
    });
    it("train lazy dancing", () => {
        jest.useFakeTimers();
        lazy.startTraining("dancing", 10);
        jest.advanceTimersByTime(100);
        lazy.stopTraining();
        expect(lazy.activities.dancing).toBe(10);
    });
});
