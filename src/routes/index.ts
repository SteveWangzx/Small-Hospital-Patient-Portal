import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/dashboard',
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    exact: false,
    component: '@/pages/dashboard',
    name: 'dashboard',
  },
  {
    path: '/medicalrecord',
    name: 'Medical Record',
    component: '@/pages/MedicalRecord',
    exact: false,
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
  {
    path: '/mainPage/patients',
    name: 'Users Management',
    component: '@/pages/Patients',
    exact: false,
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
