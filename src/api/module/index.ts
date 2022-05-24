import request from '@/utils/axios';

/**
 *   菜单
 */

interface IResponseType<
  P = {
    token: string;
    expires: number;
  },
> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const login = (userid: string) => {
  return request<IResponseType<ILogin>>({
    url: '/api/auth/menu',
    method: 'post',
    data: {
      userid,
    },
  });
};
