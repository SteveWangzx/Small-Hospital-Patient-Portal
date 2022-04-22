import { request } from 'umi';

export type registerUsers = {
  id: string;
  password: string;
  userName: string;
  userType: string;
};

export type userActivity = {
  uaid: string;
  uid: string;
  activity: string;
  oid: string;
  time: string;
};

export type UAParmas = {
  quid: string;
};

export const fetchUsers = () =>
  request<registerUsers[]>('http://localhost:3000/users', {
    method: 'GET',
  });

export const fetchUA = (data: UAParmas) =>
  request<ResType.Normal<userActivity[]>>(
    'https://n63zuarfta.execute-api.us-east-2.amazonaws.com/Alpha/adminstor/getActivityUser ',
    {
      method: 'POST',
      data,
    },
  );
