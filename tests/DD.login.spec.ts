import { test, expect } from "@playwright/test";
import loginData from "./Data/loginData.json";
loginData.forEach(({email, password}) => {
  test(`User can login with Email: ${email}`, async ({page})  => {
    await page.goto("https://binaryville.com/account/");

    await page.getByRole("textbox", { name: "Email" }).fill(email);
    await page.getByRole("textbox", { name: "Password" }).fill(password);
    await page.getByRole("button", { name: "Sign In" }).click();  

    // Adjust the URL expectation as needed for your app's behavior after login
    await expect(page).not.toHaveURL("https://binaryville.com/account/");
  });
});