import RegionsRepository from '../repositories/regions';

export default class RegionsService {
  private regionsRepository: RegionsRepository;

  constructor() {
    this.regionsRepository = new RegionsRepository();
  }
  async list() {
    return await this.regionsRepository.list();
  }
}
