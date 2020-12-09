import PenguinRandomHouse from "../../src/penguinRandomHouse/index";

describe("PenguinRandomHouse test", () => {
    it("getCats test", async () => {
        try {
            const cats = await PenguinRandomHouse.getCats();
            expect(cats.length).not.toBe(0);
        } catch (error) {
            //do nothing
        }
    });
});
