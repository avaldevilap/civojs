import { z } from 'zod';

import { Base } from '../base';;
import { PermissionSchema } from './types';

export class PermissionApi extends Base {
  list() {
    return this.request(z.array(PermissionSchema), '/permissions');
  }
}
