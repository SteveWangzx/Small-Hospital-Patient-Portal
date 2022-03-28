import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Select,
  ConfigProvider,
  Space,
  Row,
  Col,
  Card,
  Descriptions,
} from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import enUSIntl from 'antd/lib/locale/en_US';
import Field from '@ant-design/pro-field';

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
    <>
      <Row>
        <Col span={4}>
          <Card
            bordered={false}
            style={{ margin: 10, background: '#1890ff' }}
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
              style={{ color: '#fff' }}
            />
          </Card>
        </Col>
        <Col span={20}>
          <Card
            title="Basic Profile - Doctor"
            bordered={false}
            style={{ margin: 10, height: '93%' }}
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
                No. 18, Wantang Road, Xihu District
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Profile Edit" bordered={false} style={{ margin: 10 }}>
            content
          </Card>
        </Col>
      </Row>
    </>
  );
}
