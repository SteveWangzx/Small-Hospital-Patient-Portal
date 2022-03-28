import React, { useRef, useState } from 'react';
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
} from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';
import Field from '@ant-design/pro-field';
import styles from './dashboard.module.less';

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
export default function Dashboard() {
  const { Meta } = Card;
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
              title="Steve Wang"
              description="Surgeon"
              className={styles['avatar-meta']}
            />
          </Card>
        </Col>
        <Col span={20}>
          <Card
            title="Basic Profile - Doctor"
            bordered={false}
            className={styles['basic-profile']}
          >
            <Descriptions column={2}>
              <Descriptions.Item label="Name">Steve Wang</Descriptions.Item>
              <Descriptions.Item label="UserName">
                stevewangzx
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">123456789</Descriptions.Item>
              <Descriptions.Item label="Office Location">
                Worcester, MA
              </Descriptions.Item>
              <Descriptions.Item label="Office">Cardiology</Descriptions.Item>
              <Descriptions.Item label="Address">
                100 Institute Rd
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
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <Form.Item>
                <Space>
                  <Button>Reset</Button>
                  <Button type="primary">Submit</Button>
                </Space>
              </Form.Item>
              <Descriptions column={2}>
                <Descriptions.Item label="Name">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Descriptions.Item>
                <Descriptions.Item label="address">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Descriptions.Item>
              </Descriptions>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
