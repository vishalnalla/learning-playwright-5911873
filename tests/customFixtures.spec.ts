import { test as base, expect } from "@playwright/test";

const test = base.extend({
  testData: async ({}, use) => {
    // Set up test data
    const data = { email: "test@example.com", password: "pass123" };
    await use(data);
    // Teardown if necessary
  },
  authenticatedUser: [async ({ page, testData }, use) => {
      await page.goto("https://binaryville.com/account");

  const emailInput = page.getByRole("textbox", { name: "Email" });
  await emailInput.fill(testData.email);

  const passwordInput = page.getByRole("textbox", { name: "Password" });
  await passwordInput.fill(testData.password);

  const signInButton = page.getByRole("button", { name: "Sign In" });
  await signInButton.click();
  await use(page);
  },{ auto: true }]
});

test("Login with custom fixture", async ({ page, testData }) => {
  const url = page.url();
  expect(url).toContain(testData.password);
});
