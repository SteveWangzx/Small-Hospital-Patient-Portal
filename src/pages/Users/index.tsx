import React, { useEffect, useState, useRef } from 'react';
import { createIntl, IntlProvider, ProColumns } from '@ant-design/pro-table';
import type { ActionType, ProColumnType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';
import {
  Button,
  ConfigProvider,
  Form,
  Modal,
  message,
  Input,
  Select,
} from 'antd';
import type { registerUsers } from '@/services/TypeUser';
import { fetchUsers } from '@/services/TypeUser';
import { request } from 'umi';

const intlMap = {
  enUSIntl,
};

const type: { [key: string]: string } = {
  '0': 'Doctor',
  '1': 'Patient',
  '2': 'Admin',
};

export default function () {
  const actionRef = useRef<ActionType>();
  const [UAvisible, setUAvisible] = useState<boolean>(false);
  const uid = localStorage.getItem('ams_uid');
  const quid_ref = useRef<string>('');

  const handleUAClick = () => {
    setUAvisible(true);
  };

  const handleUACancel = () => {
    setUAvisible(false);
  };

  const deleteUser = (duid: string) => {
    request(`http://localhost:3000/users/${duid}`, {
      method: 'DELETE',
    })
      .then((res) => {
        message.success('Delete Success');
      })
      .then((res) => {
        actionRef?.current?.reload();
      })
      .catch((err) => {
        message.error('Delete Failed');
      });
    request(`http://localhost:3000/userInfo/${duid}`, {
      method: 'DELETE',
    });
  };

  const columns: ProColumns<registerUsers>[] = [
    {
      title: 'User Name',
      dataIndex: 'userName',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      search: false,
    },
    {
      title: 'User ID',
      dataIndex: 'id',
      search: false,
    },
    {
      title: 'User Type',
      dataIndex: 'type',
      render: (row, text) => {
        return type[text.userType];
      },
    },
    {
      title: 'Operate',
      valueType: 'option',
      search: false,
      render: (row, text) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                deleteUser(text.id);
              }}
            >
              Delete User
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <ConfigProvider locale={intlMap.enUSIntl}>
        <ProTable<registerUsers>
          columns={columns}
          actionRef={actionRef}
          headerTitle="Registered Users"
          // search={{
          //   optionRender: false,
          //   collapsed: false,
          // }}
          request={async (params, sort) => {
            const data = await fetchUsers();
            return {
              data,
            };
          }}
        ></ProTable>
      </ConfigProvider>
    </>
  );
}
