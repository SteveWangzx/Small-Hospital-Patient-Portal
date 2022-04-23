import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import type { MenuDataItem } from '@ant-design/pro-layout';
import type { Route } from '@ant-design/pro-layout/lib/typings';
import RightContent from './components/RightContent';

export const layout = () => {
  return {
    rightRender: () => <RightContent />,
  };
};

//Set Initial State
export async function getInitialState(): Promise<{ loginType: string | null }> {
  const loginType = localStorage.getItem('type');
  return { loginType };
}
