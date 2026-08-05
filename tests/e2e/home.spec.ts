import { expect, test } from "@playwright/test";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("homepage renders without runtime errors or horizontal overflow", async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle(/Comwerkz Technology/);
  await expect(page.getByRole("heading", { level: 1, name: "Technology that keeps your business moving." })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Solutions built around your business/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Let’s plan the right solution/ })).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(consoleErrors).toEqual([]);

  const screenshotPath = testInfo.project.name.startsWith("mobile")
    ? join(tmpdir(), "comwerkz-mobile-latest.png")
    : join(tmpdir(), "comwerkz-desktop-latest.png");
  await page.screenshot({ path: screenshotPath, fullPage: true });
});

test("primary responsive interactions work", async ({ page }, testInfo) => {
  await page.goto("/");

  if (testInfo.project.name.startsWith("mobile")) {
    const menu = page.getByRole("button", { name: "Open navigation menu" });
    await menu.click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await page.getByRole("link", { name: "Solutions", exact: true }).last().click();
    await expect(page.locator("#solutions")).toBeInViewport();
  }

  const aiSummary = page.locator("#services summary").filter({ hasText: "AI Consulting for SMEs" });
  await aiSummary.click();
  await expect(page.getByText("AI agent and workflow consulting", { exact: true })).toBeVisible();

  const dock = page.getByRole("button", { name: "Open quick contact options" });
  await dock.click();
  await expect(page.getByRole("link", { name: "Call Comwerkz" })).toBeVisible();
});

test("crawl directives and sitemap are public", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Allow: /");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("<urlset");
});
