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
    '@primary-color': '#24bc06',
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
  // layout: {
  //   // 支持任何不需要 dom 的
  //   // https://procomponents.ant.design/components/layout#prolayout
  //   name: 'Small Hospital Patient Portal',
  //   locale: true,
  //   layout: 'side',
  // },
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
