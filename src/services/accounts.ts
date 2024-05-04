import AccountsRepository from '../repositories/accounts';

export default class AccountService {
  private accountRepository: AccountsRepository;

  constructor() {
    this.accountRepository = new AccountsRepository();
  }
  async list() {
    return await this.accountRepository.list();
  }

  async get() {
    const accounts = await this.accountRepository.list();
    return accounts.items[0].id;
  }
}

// export default function makeAccountService({
//   accountRepository,
// }: { accountRepository: AccountsRepository }) {
//   return {
//     async list() {
//       const accounts = await accountRepository.list();
//       return accounts;
//     },
//     async get() {
//       const accounts = await accountRepository.list();
//       return accounts.items[0].id;
//     },
//   };
// }
