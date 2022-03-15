import { defineConfig } from 'umi';
import path from 'path';
import routes from '../src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  history: {
    type: 'hash',
  },
  base: './',
  publicPath: './',
  hash: true,
  theme: {
    '@primary-color': '#73d13d',
    '@ant-prefix': 'ant',
  },
  layout: {
    name: 'Small Hospital Patient Portal',
    logo: 'logo.png',
    locale: false,
    navTheme: 'light',
    layout: 'mix',
  },
  favicon: 'logo.png',
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
