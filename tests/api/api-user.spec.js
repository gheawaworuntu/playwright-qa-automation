import { test, expect } from '@playwright/test'

test('GET user should return 200 and list of users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect (response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('email');
});

test('GET single user should return correct id', async ({request}) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
});

test('GET non-existing user should return 404', async ({ request }) => {
    const response = await request.get(
        'https://dummyjson.com/users/1'
    );

    expect(response.status()).toBe(404);
});