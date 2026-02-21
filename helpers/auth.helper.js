export async function login(request, username, password) {
  return await request.post(
    'https://dummyjson.com/auth/login',
    {
      headers: { 'Content-Type': 'application/json' },
      data: {
        username,
        password
      }
    }
  );
}