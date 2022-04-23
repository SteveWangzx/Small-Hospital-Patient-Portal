import React, { useEffect, useRef } from 'react';
import { request } from 'umi';
import { createIntl, IntlProvider, ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import type { ActionType, ProColumnType } from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';

const intlMap = {
  enUSIntl,
};

import {
  Button,
  ConfigProvider,
  Space,
  Modal,
  Drawer,
  Form,
  Input,
  message,
} from 'antd';

type MRtype = {
  patientName: string;
  patientId: string;
  doctorName: string;
  doctorId: string;
  Date: string;
  sympton: string;
  treatment: string;
  drug: string;
  id: string;
};

interface param {
  patientId: string;
}

const fetchPatient = (id: string) =>
  request<MRtype[]>(`http://localhost:3000/treatments?patientId=${id}`, {
    method: 'GET',
  });

export default function (props: param) {
  const { patientId } = props;
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    console.log(patientId);
    actionRef.current?.reload();
  }, [patientId]);

  const handleDelete = (id: string) => {
    request(`http://localhost:3000/treatments/${id}`, {
      method: 'DELETE',
    }).then(() => {
      message.success('DELETE Success!');
      actionRef.current?.reload();
    });
  };

  const columns: ProColumns<MRtype>[] = [
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      search: false,
      width: 50,
    },
    {
      title: 'Doctor Name',
      dataIndex: 'doctorName',
      search: false,
      width: 50,
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      search: false,
      width: 50,
    },
    {
      title: 'Symptom',
      dataIndex: 'sympton',
      search: false,
      width: 100,
    },
    {
      title: 'Treatment',
      dataIndex: 'treatment',
      search: false,
      width: 100,
    },
    {
      title: 'Medicine',
      dataIndex: 'drug',
      search: false,
      width: 50,
    },
    {
      title: 'Operation',
      search: false,
      width: 100,
      render: (row, text) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              handleDelete(text.id);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  return (
    <ConfigProvider locale={intlMap.enUSIntl}>
      <ProTable<MRtype>
        columns={columns}
        actionRef={actionRef}
        headerTitle="Medical Records List"
        search={{
          optionRender: false,
          collapsed: false,
        }}
        request={async (params, sort) => {
          const data = await fetchPatient(patientId);
          return { data };
        }}
      />
    </ConfigProvider>
  );
}
