import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import { createRandomRegion } from '../mocks/utils';
import { regionsService } from '../src';

const server = setupServer(
  http.get('https://api.civo.com/v2/regions', () => {
    return HttpResponse.json(
      Array.from({ length: 5 }).map(() => createRandomRegion()),
      { status: 200 },
    );
  }),
);

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('get all regions', async () => {
  const regions = await regionsService.list();

  expect(regions.length).toBeGreaterThan(0);
});
