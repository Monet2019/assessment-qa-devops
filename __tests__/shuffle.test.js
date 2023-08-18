const shuffle = require("../src/shuffle");
const botsData = require("../src/botsData");

  describe("shuffle should...", () => {
    // CODE HERE
    test("return an array", () => {
      expect(typeof shuffle(botsData)).toBe("array")
    })
  
    test("return an array", () => {
      expect(shuffle(botsData)).toEqual(expect.arrayContaining(botsData))
    })
  });
