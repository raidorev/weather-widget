import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Weather widget with geolocation', () => {
  test.use({
    permissions: [],
  })

  test('should show message to go to settings if cannot get geolocation', async ({
    page,
  }) => {
    await expect(
      page.getByText(
        'No locations added yet. Click the settings button to add one. ',
      ),
    ).toBeVisible()
  })
})

test.describe('Weather widget without geolocation', async () => {
  test.use({
    permissions: ['geolocation'],
    geolocation: {
      latitude: 50.8841204,
      longitude: 4.635328,
    },
  })

  test('should get location and provide weather for it', async ({ page }) => {
    await expect(page.getByText('Bertem, BE')).toBeVisible()
  })
})

test.describe('Settings', () => {
  test.use({
    permissions: ['geolocation'],
    geolocation: {
      latitude: 50.8841204,
      longitude: 4.635328,
    },
  })

  test('should add, remove and reorder locations', async ({ page }) => {
    await openSettings()

    await page.getByPlaceholder('Start typing...').click()
    await page.getByPlaceholder('Start typing...').fill('London')
    await page.getByText('Location London - GB').click()

    await page.getByPlaceholder('Start typing...').click()
    await page.getByPlaceholder('Start typing...').fill('Moscow')
    await page.getByText('Location Moscow - RU').click()

    await page.getByPlaceholder('Start typing...').click()
    await page.getByPlaceholder('Start typing...').fill('Paris')
    await page.getByText('Location Paris - FR').first().click()

    await closeSettings()

    await expect(getHeading('London, GB')).toBeVisible()
    await expect(getHeading('Moscow, RU')).toBeVisible()
    await expect(getHeading('Paris, FR')).toBeVisible()

    await openSettings()

    const moscowDragButton = page
      .locator('li', { hasText: 'Moscow, RU' })
      .locator('.drag')
    const paris = page.locator('li', { hasText: 'Paris, FR' })

    await moscowDragButton.dragTo(paris)

    await closeSettings()

    const elements = page.getByRole('heading')
    await expect(getHeading('Moscow, RU')).toBeVisible()

    const texts = await elements.allTextContents()

    expect(texts[2]).toBe('Paris, FR')
    expect(texts[3]).toBe('Moscow, RU')

    await openSettings()

    await page
      .getByRole('listitem')
      .filter({ hasText: 'MenuMoscow, RUClose' })
      .getByRole('button', { name: 'Close' })
      .click()

    await closeSettings()

    await expect(getHeading('London, GB')).toBeVisible()
    await expect(getHeading('Moscow, RU')).toHaveCount(0)
    await expect(getHeading('Paris, FR')).toBeVisible()

    async function openSettings() {
      await page.getByRole('button', { name: 'Settings' }).first().click()
    }

    async function closeSettings() {
      await page.getByRole('button', { name: 'Close' }).first().click()
    }

    function getHeading(name: string) {
      return page.getByRole('heading', { name })
    }
  })
})
