import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Select, ConfigProvider, Space } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';

const intlMap = {
  enUSIntl,
};

type PatientItem = {
  name: string;
  ssn: string;
  dob: string;
  gender: string;
  state: string;
  city: string;
};
export default function Patients() {
  const [intl, setIntl] = useState('enUSIntl');
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<PatientItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
      hideInSearch: true,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      hideInSearch: true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Operate',
      render: (row, text) => {
        return (
          <>
            <Space>
              <Button type="primary"> View </Button>
              <Button type="primary"> Delete </Button>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <>
      <ConfigProvider locale={intlMap.enUSIntl}>
        <ProTable
          columns={columns}
          actionRef={actionRef}
          headerTitle="Patients Basic Info"
          request={async (params, sort) => {
            return {
              data: [
                {
                  name: 'Steve',
                  ssn: '123456789',
                  dob: '01/16/1999',
                  gender: 'Male',
                  state: 'MA',
                  city: 'Worcester',
                },
                {
                  name: 'Allen',
                  ssn: '123456789',
                  dob: '01/16/1997',
                  gender: 'Male',
                  state: 'CA',
                  city: 'San Jose',
                },
                {
                  name: 'Justin',
                  ssn: '123456789',
                  dob: '01/16/1990',
                  gender: 'Male',
                  state: 'MA',
                  city: 'Boston',
                },
              ],
              success: true,
            };
          }}
        />
      </ConfigProvider>
    </>
  );
}
