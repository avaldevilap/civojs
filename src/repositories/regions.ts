import { $fetch } from '../utils';

export default class RegionsRepository {
  list() {
    return $fetch('/regions');
  }
}
