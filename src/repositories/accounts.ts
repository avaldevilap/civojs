import { $fetch } from '../utils';

export default class AccountsRepository {
  list() {
    return $fetch('/accounts');
  }
}
