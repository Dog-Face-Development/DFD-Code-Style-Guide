import { test, expect } from "@playwright/test";

test("page loads correctly", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const title = await page.title();
  expect(title).toBe("DFD Style Guide");
});

test("theme is set correctly", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const theme = await page.evaluate(() => localStorage.getItem("theme"));
  expect(theme).toBe("light");
});
