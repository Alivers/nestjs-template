import { ErrInfo } from './code';

export class BizError extends Error {
  data?: any;
  code: number;

  constructor(errEnum: ErrInfo, data?: any) {
    super();

    // Error
    this.name = 'bizError';
    this.message = errEnum.msg;

    this.data = data;
    this.code = errEnum.code;
  }
}
