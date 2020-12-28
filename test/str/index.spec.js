import { findQuotedString } from "../../src/str";
describe("findQuotedString", () => {
    it("findQuotedString", () => {
        const str = '  "Say \\"Hello\\"!"  ';
        const matches = findQuotedString(str)
        expect(matches[0]).toBe('\"Say \\"Hello\\"!\"');
    });
});
