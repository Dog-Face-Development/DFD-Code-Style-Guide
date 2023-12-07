import { test, expect } from "@playwright/test";

test("page loads correctly", async ({ page }) => {
  await page.goto("/");
  const title = await page.title();
  expect(title).toBe("DFD Style Guide");
});
