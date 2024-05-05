import { afterAll, afterEach, beforeAll, test } from 'bun:test';
import { BunRuntime } from '@effect/platform-bun';
import { Effect } from 'effect';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { regions } from '../src/index';

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/regions`, () => {
    return HttpResponse.json(
      Array.from({ length: 5 }).map(() => ({
        code: 'NYC1',
        name: '',
        type: 'civostack',
        default: true,
        out_of_capacity: false,
        country: '',
        country_name: '',
        features: {
          iaas: true,
          kubernetes: true,
          object_store: true,
          loadbalancer: true,
          dbaas: true,
          volume: true,
          paas: true,
          kfaas: true,
          public_ip_node_pools: true,
        },
      })),
      { status: 200 },
    );
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('regions', () => {
  // console.log(Effect.runPromise(regions).then(console.log));
  console.log(BunRuntime.runMain(regions));
});
