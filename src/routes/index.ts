import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/login',
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    component: '@/pages/Dashboard',
    name: 'dashboard',
    access: 'dashboard',
  },
  {
    path: '/viewPatients',
    name: 'View Patients',
    access: 'Doctor',
    component: '@/pages/ViewPatients',
  },
  {
    path: '/medicalrecord',
    name: 'Medical Record',
    component: '@/pages/MedicalRecord',
    access: 'Patient',
  },
  {
    path: '/pharmacy',
    name: 'Pharmacy',
    access: 'Admin',
  },
  {
    path: '/mainPage/patients',
    name: 'Users Management',
    access: 'Admin',
    component: '@/pages/Users',
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
