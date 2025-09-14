import { expect, test } from "@playwright/test";
test("Sign In Button is Visible", async ({page}) => {
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
  await page.goto("https://binaryville.com");
  const accountLink = page.getByRole("link", { name: "Account" });
  await expect(accountLink).toBeVisible();
  // await browser.close();
});
