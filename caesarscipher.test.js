/* eslint-disable no-undef */
const rot13 = require("./caesarscipher");

test("SERR PBQR PNZC should return FREE CODE CAMP", () => {
  expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
});

test("SERR CVMMN! should return FREE PIZZA!", () => {
  expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
});

test("SERR YBIR? should return FREE LOVE?", () => {
  expect(rot13("SERR YBIR?")).toBe("FREE LOVE?");
});

test("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. should return THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", () => {
  expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe(
    "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
  );
});
