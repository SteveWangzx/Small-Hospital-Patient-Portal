import React from 'react';
import { useModel } from 'umi';

export default function (initialState: { loginType: string | null }) {
  const loginType = localStorage.getItem('type');
  console.log(loginType);

  return {
    dashboard: true,
    Doctor: loginType === '0',
    Patient: loginType === '1',
    Admin: loginType === '2',
  };
}
