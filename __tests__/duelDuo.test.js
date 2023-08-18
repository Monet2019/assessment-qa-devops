const { By, Builder, Browser, until, Key } = require('selenium-webdriver');

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.sleep(1000)
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 5000);
  });
  
  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.elementLocated(By.css("#draw")),5000).click()

    let choicesDiv = await driver.wait(until.elementLocated(By.css("#choices")),5000)

    expect(choicesDiv).toBeDefined();
  });

  test("clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");

    // Find and click on the draw button
    await driver.wait(until.elementLocated(By.css("#draw")),5000).click()

    // Find and click on the add to duo button
    await driver.wait(until.elementLocated(By.css(".bot-btn")),5000).click()

    // Find and wait for the "player-duo" div
    let playerDuoDiv = await driver.wait(until.elementLocated(By.css("#player-duo")),1000)

    expect(playerDuoDiv).toBeDefined();
  });
});
