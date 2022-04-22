import React, { useRef, useEffect } from 'react';
import { Button, ConfigProvider } from 'antd';
import enUSIntl from 'antd/lib/locale/en_US';
import { createIntl, IntlProvider, ProColumns } from '@ant-design/pro-table';
import type { ActionType, ProColumnType } from '@ant-design/pro-table';

const intlMap = {
  enUSIntl,
};

export default function () {
  const actionRef = useRef<ActionType>();

  return <a>test</a>;
}
