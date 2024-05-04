import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import { accountsService } from '../src';

const server = setupServer(
  http.get('https://api.civo.com/v2/accounts', () => {
    return HttpResponse.json([{}, {}]);
  }),
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('list all accounts', async () => {
  const accounts = await accountsService.list();

  expect(accounts.length).toBeGreaterThan(0);
});
