import { BunRuntime } from '@effect/platform-bun';
import * as Http from '@effect/platform/HttpClient';
import type * as ParseResult from '@effect/schema/ParseResult';
import * as Schema from '@effect/schema/Schema';
import { Context, Effect, Layer } from 'effect';
import {
  AccountApi,
  ActionApi,
  ApplicationApi,
  ChargeApi,
  type Config,
  DNSDomainApi,
  DatabaseApi,
  DatabaseBackupApi,
  DiskImagesApi,
  FirewallApi,
  IPApi,
  InstancesApi,
  KfClusterApi,
  KubernetesApi,
  LoadBalancerApi,
  NetworksApi,
  ObjectStoreApi,
  OrganizationApi,
  PermissionApi,
  PoolApi,
  QuotaApi,
  RegionsApi,
  RoleApi,
  SSHKeyApi,
  SubnetsApi,
  TeamApi,
  UserApi,
  VolumeApi,
  WebhookApi,
} from './resources';

/**
 * A comprehensive API client for the Civo cloud platform.
 */
export class Civo {
  accounts: AccountApi;
  actions: ActionApi;
  applications: ApplicationApi;
  charges: ChargeApi;
  databases: DatabaseApi;
  databaseBackups: DatabaseBackupApi;
  diskImages: DiskImagesApi;
  dns: DNSDomainApi;
  firewalls: FirewallApi;
  instances: InstancesApi;
  ips: IPApi;
  kfclusters: KfClusterApi;
  kubernetes: KubernetesApi;
  loadbalancers: LoadBalancerApi;
  networks: NetworksApi;
  subnets: SubnetsApi;
  objectStore: ObjectStoreApi;
  organizations: OrganizationApi;
  permissions: PermissionApi;
  pools: PoolApi;
  quotas: QuotaApi;
  regions: RegionsApi;
  roles: RoleApi;
  sshKeys: SSHKeyApi;
  teams: TeamApi;
  users: UserApi;
  volumes: VolumeApi;
  webhooks: WebhookApi;

  /**
   * Creates a new Civo API client.
   *
   * @param config The Civo API key and other configuration options.
   */
  constructor(config: Config) {
    this.accounts = new AccountApi(config);
    this.actions = new ActionApi(config);
    this.applications = new ApplicationApi(config);
    this.charges = new ChargeApi(config);
    this.databases = new DatabaseApi(config);
    this.databaseBackups = new DatabaseBackupApi(config);
    this.diskImages = new DiskImagesApi(config);
    this.dns = new DNSDomainApi(config);
    this.firewalls = new FirewallApi(config);
    this.instances = new InstancesApi(config);
    this.ips = new IPApi(config);
    this.kfclusters = new KfClusterApi(config);
    this.kubernetes = new KubernetesApi(config);
    this.loadbalancers = new LoadBalancerApi(config);
    this.networks = new NetworksApi(config);
    this.subnets = new SubnetsApi(config);
    this.objectStore = new ObjectStoreApi(config);
    this.organizations = new OrganizationApi(config);
    this.permissions = new PermissionApi(config);
    this.pools = new PoolApi(config);
    this.quotas = new QuotaApi(config);
    this.regions = new RegionsApi(config);
    this.roles = new RoleApi(config);
    this.sshKeys = new SSHKeyApi(config);
    this.teams = new TeamApi(config);
    this.users = new UserApi(config);
    this.volumes = new VolumeApi(config);
    this.webhooks = new WebhookApi(config);
  }
}

class Feature extends Schema.Class<Feature>('Feature')({
  iaas: Schema.Boolean,
  kubernetes: Schema.Boolean,
  object_store: Schema.Boolean,
  loadbalancer: Schema.Boolean,
  dbaas: Schema.Boolean,
  volume: Schema.Boolean,
  paas: Schema.Boolean,
  kfaas: Schema.Boolean,
  public_ip_node_pools: Schema.Boolean,
}) {}

class Region extends Schema.Class<Region>('Region')({
  code: Schema.String,
  name: Schema.String,
  type: Schema.String,
  out_of_capacity: Schema.Boolean,
  country: Schema.String,
  country_name: Schema.String,
  features: Feature,
  default: Schema.Boolean,
}) {}

// type RegionSchema = Schema.Schema.Type<typeof Region>;

interface RegionService {
  readonly list: () => Effect.Effect<
    Region,
    Http.error.HttpClientError | Http.body.BodyError | ParseResult.ParseError
  >;
}

const RegionService = Context.GenericTag<RegionService>('RegionService');

const makeRegionService = Effect.gen(function* (_) {
  const defaultClient = yield* _(Http.client.Client);
  const clientWithBaseUrl = defaultClient.pipe(
    Http.client.filterStatusOk,
    Http.client.mapRequest(Http.request.prependUrl('https://api.civo.com/v2')),
  );

  // const addTodoWithoutIdBody = Http.request.schemaBody(TodoWithoutId);
  // const create = (todo: TodoWithoutId) =>
  //   addTodoWithoutIdBody(Http.request.post('/todos'), todo).pipe(
  //     Effect.flatMap(clientWithBaseUrl),
  //     Http.response.schemaBodyJsonScoped(Todo),
  //   );

  const list = () =>
    clientWithBaseUrl(Http.request.get('/regions')).pipe(
      Http.response.schemaBodyJsonScoped(Region),
    );

  return RegionService.of({ list });
});

export const RegionServiceLive = Layer.effect(
  RegionService,
  makeRegionService,
).pipe(Layer.provide(Http.client.layer));

export const regions = Effect.flatMap(RegionService, (regions) =>
  regions.list(),
).pipe(
  Effect.tap(Effect.log),
  Effect.provide(RegionServiceLive),
  // BunRuntime.runMain,
);
