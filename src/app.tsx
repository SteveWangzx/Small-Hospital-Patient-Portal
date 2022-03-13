import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import type { MenuDataItem } from '@ant-design/pro-layout';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): BasicLayoutProps => {
  return {
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    // onPageChange: () => {
    // const { currentUser } = initialState;
    // const { location } = history;
    // 如果没有登录，重定向到 login
    // if (!currentUser && location.pathname !== '/user/login') {
    // history.push('/user/login');
    // }
    // },
    menuDataRender: (menuData: MenuDataItem[]) => {
      return menuData;
    },
    ...initialState?.settings,
  };
};
