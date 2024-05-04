import { asClass, createContainer } from 'awilix';
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
import AccountService from './services/accounts';
import RegionsService from './services/regions';

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

interface CivoContainer {
  accountsService: AccountService;
  regionsService: RegionsService;
}

const container = createContainer<CivoContainer>();
container.register({
  accountsService: asClass(AccountService).scoped(),
  regionsService: asClass(RegionsService).scoped(),
});

export const accountsService = container.resolve('accountsService');
export const regionsService = container.resolve('regionsService');
