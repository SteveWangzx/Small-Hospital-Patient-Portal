import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/mainPage',
    hideInMenu: true,
  },
  {
    path: '/mainPage',
    exact: true,
    component: '@/pages/index',
    name: 'dashboard',
    hideInMenu: false,
    routes: [
      {
        path: '/medicalrecord',
        name: 'Medical Record',
        exact: true,
      },
      {
        path: '/pharmacy',
        name: 'Pharmacy',
        exact: true,
      },
      {
        path: '/treatment',
        name: 'Treatment',
        exact: true,
      },
    ],
  },
  {
    title: 'login',
    path: '/login',
    exact: true,
    component: '@/pages/login',
    layout: false,
  },
  {
    path: '/create',
    exact: true,
    component: '@/pages/create',
    layout: false,
  },
];

export default routes;
