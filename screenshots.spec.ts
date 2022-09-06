import { test } from "@playwright/test";

const people = require("./people.json");
for (const group of people) {
  for (const github of group.students) {
    test(github.owner, async ({ page }) => {
      await page.goto(github.url);
      await page.screenshot({ path: `./images/${github.owner}.png` });
    });
  }
}
