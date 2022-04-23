import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Select,
  ConfigProvider,
  Space,
  Form,
  Row,
  Col,
  Card,
  Descriptions,
  Input,
  message,
} from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';
import Field from '@ant-design/pro-field';
import styles from './dashboard.module.less';
import { history, request } from 'umi';

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

// Type to usertype
const type: { [key: string]: string } = {
  '0': 'Doctor',
  '1': 'Patient',
  '2': 'Adminstraitor',
};

export default function Dashboard() {
  const { Meta } = Card;
  const [id, setId] = useState<any>();
  const [userType, setUserType] = useState<any>();
  const [info, setInfo] = useState<any>();
  const [form] = Form.useForm();
  // reset profile edit form
  const onReset = () => {
    form.resetFields();
  };
  // API: Get user Info
  const infoGet = async (id: any) => {
    const res = await request(`http://localhost:3000/userInfo?id=${id}`, {
      method: 'GET',
    });
    return res;
  };

  const infoPut = async (data: any) => {
    await request(`http://localhost:3000/userInfo/${id}`, {
      method: 'PUT',
      data,
    })
      .then((res) => {
        location.reload();
      })
      .then((res) => {
        message.success('Edit Profile Success!');
      });
  };

  const formCollect = () => {
    form.validateFields().then(() => {
      const { name, Location, Office, Address, phone, role } =
        form.getFieldsValue();
      const username = localStorage.getItem('uname');
      const usertype = localStorage.getItem('type');
      const data = {
        name: name,
        userName: username,
        Location: Location,
        Office: Office,
        Address: Address,
        phone: phone,
        role: role,
        userType: usertype,
      };
      infoPut(data);
    });
  };

  useEffect(() => {
    const curr_id = localStorage.getItem('uid');
    const curr_type = localStorage.getItem('type');
    console.log(curr_id);
    setId(curr_id);
    console.log(info?.Address);
    setUserType(curr_type);
    if (id) {
      infoGet(id).then((res) => {
        console.log(res[0]);
        setInfo(res[0]);
      });
    }
    console.log(info?.Address);
  }, [id]);

  return (
    <div className={styles['dashboard-wrapper']}>
      <Row>
        <Col span={4}>
          <Card
            bordered={false}
            className={styles['avatar-card']}
            cover={
              <img
                src="./doctor.png"
                style={{ width: '100%', height: '100%' }}
              />
            }
          >
            <Meta
              title={info?.name}
              description={info?.role}
              className={styles['avatar-meta']}
            />
          </Card>
        </Col>
        <Col span={20}>
          <Card
            title={`Basic Profile - ${type[userType]}`}
            bordered={false}
            className={styles['basic-profile']}
          >
            <Descriptions column={2}>
              <Descriptions.Item label="Name">{info?.name}</Descriptions.Item>
              <Descriptions.Item label="UserName">
                {info?.userName}
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                {info?.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Office Location">
                {info?.Location}
              </Descriptions.Item>
              <Descriptions.Item label="Office">
                {info?.Office}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {info?.Address}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card
            title="Profile Edit"
            bordered={false}
            className={styles['basic-profile-edit']}
          >
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} form={form}>
              <Form.Item>
                <Space>
                  <Button onClick={onReset}>Reset</Button>
                  <Button type="primary" onClick={formCollect}>
                    Submit
                  </Button>
                </Space>
              </Form.Item>
              {/* <Descriptions.Item label="Name"> */}
              <Form.Item label="Name" name="name" initialValue={info?.name}>
                <Input />
              </Form.Item>
              <Form.Item label="Role" name="role" initialValue={info?.role}>
                <Input />
              </Form.Item>
              {/* </Descriptions.Item> */}
              <Form.Item
                label="Telephone"
                name="phone"
                initialValue={info?.phone}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Office"
                name="Office"
                initialValue={info?.Office}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="Address"
                initialValue={info?.Address}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Location"
                name="Location"
                initialValue={info?.Location}
              >
                <Input />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
