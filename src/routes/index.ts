import type { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    exact: true,
    component: '@/pages/index',
    routes: [
      {
        path: '/login',
        exact: true,
      },
      {
        path: '/create',
        exact: true,
      },
    ],
  },
];

export default routes;
