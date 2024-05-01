export interface ErrInfo {
  code: number;
  msg: string;
}

export const ErrCode = {
  InvalidParameter: {
    code: 1001,
    msg: 'invalid parameter',
  },
};
