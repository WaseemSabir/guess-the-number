import makeStatus from "../utils";

it("test make status functionality of app", () => {
    expect(makeStatus(1, 3)).toEqual("Nope. Higher");
    expect(makeStatus(3, 3)).toEqual("You got it!");
    expect(makeStatus(4, 3)).toEqual("Nope. Lower");
});
