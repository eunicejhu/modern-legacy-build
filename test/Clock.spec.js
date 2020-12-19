import Clock from "../src/Clock";
it("Clock", () => {
    const clock = new Clock({ template: "h:m:s" });
    expect(Object.getOwnPropertyNames(clock)).toEqual(["timer", "template"]);
    expect(Object.keys(clock)).toEqual(["timer", "template"]);
    expect(Object.getOwnPropertyNames(Clock.prototype)).toEqual([
        "constructor",
        "render",
        "start",
        "stop",
    ]);
});
