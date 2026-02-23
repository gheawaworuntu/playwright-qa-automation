import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth.helper.js';

test('Login success', async ({ request }) => {

  const response = await login(
    request,
    'emilys',
    'emilyspass'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.accessToken).toBeTruthy();
});

test ('Failed login wrong password', async ({ request }) => {
    const response = await login(
        request,
        'emilys',
        'k@therine'
    );

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.message).toContain('Invalid credentials');
})