import { defineConfig } from 'umi';
import path from 'path';
import routes from '../src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  history: {
    type: 'hash',
  },
  base: './',
  publicPath: './',
  hash: true,
  theme: {
    '@primary-color': '#2f54eb',
    '@ant-prefix': 'ant',
  },
  layout: {
    name: 'Small Hospital Patient Portal',
    logo: '../public/logo.png',
    locale: false,
    navTheme: 'light',
    width: '100%',
    layout: 'mix',
  },
  favicon: '../public/logo.png',
  // dynamicImport: {
  //   loading: '@/components/DynamicImportLoading',
  // },
  fastRefresh: {},
  alias: {
    '@root': path.resolve('./'),
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  forkTSChecker: {},
});
