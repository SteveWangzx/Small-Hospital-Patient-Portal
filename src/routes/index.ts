import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/login',
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    exact: false,
    component: '@/pages/Dashboard',
    name: 'dashboard',
  },
  {
    path: '/viewPatients',
    exact: true,
    name: 'View Patients',
    component: '@/pages/ViewPatients',
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
    component: '@/pages/Users',
    exact: false,
  },
  {
    title: 'login',
    path: '/login',
    exact: true,
    component: '@/pages/Login',
    layout: false,
  },
  {
    path: '/create',
    exact: true,
    component: '@/pages/Create',
    layout: false,
  },
];

export default routes;
