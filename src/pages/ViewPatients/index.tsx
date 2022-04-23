import React, { useRef, useEffect, useState } from 'react';
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
import enUSIntl from 'antd/lib/locale/en_US';
import { createIntl, IntlProvider, ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import type { ActionType, ProColumnType } from '@ant-design/pro-table';
import { request } from 'umi';
import MedicalRecord from '@/pages/ViewPatients/MedicalRecord';

const intlMap = {
  enUSIntl,
};

type patientsInfo = {
  name: string;
  userName: string;
  Location: string;
  Office: string;
  Address: string;
  phone: string;
  role: string;
  userType: string;
  id: string;
};

const fetchPatient = () =>
  request<patientsInfo[]>('http://localhost:3000/userInfo?userType=1', {
    method: 'GET',
  });

export default function () {
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const [patient, setPatient] = useState<string>('');
  const [patientID, setPatientID] = useState<string>('');
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const id_curr = useRef<string>('');

  const showDrawer = (name: string, id: string) => {
    setPatient(name);
    setPatientID(id);
    setDrawerVisible(true);
    form.resetFields();
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const handleModalCancle = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    setDrawerVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setDrawerVisible(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleSubmit = () => {
    form.validateFields().then(() => {
      const {
        patientName,
        patientId,
        doctorName,
        doctorId,
        Date,
        sympton,
        treatment,
        drug,
      } = form.getFieldsValue();

      const data = {
        patientName: patientName,
        patientId: patientId,
        doctorName: doctorName,
        doctorId: doctorId,
        Date: Date,
        sympton: sympton,
        treatment: treatment,
        drug: drug,
      };
      Post(data);
    });
  };

  const Post = async (data: any) => {
    console.log(data);
    await request('http://localhost:3000/treatments', {
      method: 'POST',
      data,
    }).then((res) => {
      message.success('Submit Sccess!');
      handleCancel();
    });
  };

  const columns: ProColumns<patientsInfo>[] = [
    {
      title: 'Patien Name',
      dataIndex: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'Location',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      search: false,
    },
    {
      title: 'Operations',
      search: false,
      render: (row, text) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                showDrawer(text.name, text.id);
              }}
            >
              Create Treatments
            </Button>
            <Button
              type="primary"
              onClick={() => {
                showModal();
                id_curr.current = text.id;
              }}
            >
              View Meidical Records
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <ConfigProvider locale={intlMap.enUSIntl}>
      <ProTable<patientsInfo>
        columns={columns}
        actionRef={actionRef}
        headerTitle="Patiens List"
        request={async (params, sort) => {
          const data = await fetchPatient();
          return { data };
        }}
      />

      <Drawer
        visible={drawerVisible}
        onClose={handleCancel}
        size="large"
        extra={
          <Space>
            <Button onClick={onReset}>Reset</Button>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form form={form}>
          <Form.Item
            label="Patient Name"
            name="patientName"
            initialValue={patient}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Patient ID"
            name="patientId"
            initialValue={patientID}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Doctor Name"
            name="doctorName"
            initialValue={localStorage.getItem('uname')}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Doctor ID"
            name="doctorId"
            initialValue={localStorage.getItem('uid')}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Date"
            name="Date"
            rules={[{ required: true, message: 'Please input Date!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sympton Desprition"
            name="sympton"
            rules={[
              { required: true, message: 'Please input Sympton Description!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Treatment"
            name="treatment"
            rules={[{ required: true, message: 'Please input Treatment!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Medicine"
            name="drug"
            rules={[{ required: true, message: 'Please input Drug!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
      <Modal
        visible={modalVisible}
        onCancel={handleModalCancle}
        footer={false}
        width={1000}
      >
        <MedicalRecord patientId={id_curr.current} />
      </Modal>
    </ConfigProvider>
  );
}
