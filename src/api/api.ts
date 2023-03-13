import { AxiosResponse } from 'axios';

import { instance } from 'api';
import { UserType } from 'common';

export const requestAPI = {
  getUsers() {
    return instance.get<UserType[], AxiosResponse<UserType[]>>(`/users`);
  },
};
