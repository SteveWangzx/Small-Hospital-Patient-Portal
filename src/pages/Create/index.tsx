import { useEffect, useState } from 'react';
import { history, request, useRequest } from 'umi';
import { Button, Form, Input, Select, message, Radio } from 'antd';
import { useModel } from 'umi';
// import { userName } from 'config'

import icon from '@/images/login_icon.png';
import illustration from '@/images/login_illustration.png';
import passwordImg from '@/images/password.png';
import usernameImg from '@/images/username.png';

import styles from './login.modules.less';

export type LoginParams = {
  username: string;
  password: string;
};

const Create = () => {
  const { refresh } = useModel('@@initialState');
  const [form] = Form.useForm();
  const [userType, setUserType] = useState('1');

  const onUserTypeChange = (value: any) => {
    setUserType(value);
  };
  // const _userName = userName()

  const register_set = async (data: any) => {
    await request('http://localhost:3000/users', {
      method: 'post',
      data,
    })
      .then((res) => {
        message.success('Reguster Success!');
        console.log(res);
        // localStorage.setItem('ams_statusType', statusType);
      })
      .catch((err) => {
        message.error(`Register Failed! Please try again!`);
      })
      .finally(() => {
        history.push('/login');
      });
  };

  const create_info = async (data: any) => {
    await request('http://localhost:3000/userInfo', {
      method: 'post',
      data,
    });
  };
  const registerHook = () => {
    form.validateFields().then(() => {
      const { username, password, type } = form.getFieldsValue();
      const rand = Math.random();
      const id = 10000 + Math.round(rand * 10000);
      const str_id = id.toString();
      const data = {
        id: str_id,
        userName: username,
        password: password,
        userType: type,
      };
      const info = {
        id: str_id,
        userName: username,
        userType: type,
      };
      register_set(data).then(() => {
        create_info(info);
      });
    });
  };
  const onFinish = async (values: LoginParams) => {
    history.push('/login');

    setTimeout(() => {
      refresh();
    }, 0);
  };

  return (
    <div className={styles['login-wrap']}>
      <div className={styles['login-wrap-center']}>
        <div className={styles['logo-wrap']}>
          <img src={illustration} className={styles.illustration} />
        </div>
        <div className={styles['form-wrap']}>
          <div>
            <div className={styles.title}>Small Hospital Patient Portal</div>
            <div className={styles.welcome}>Create Account</div>
          </div>

          <Form
            onFinish={onFinish}
            form={form}
            style={{ marginTop: 15 }}
            // initialValues={{ password: 'lgkj@wl' }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Username cannot be empty!' }]}
            >
              <Input
                bordered={false}
                placeholder="Please Enter Username"
                prefix={
                  <img
                    src={usernameImg}
                    style={{ width: 18, marginRight: 10 }}
                  />
                }
                autoComplete="off"
              />
            </Form.Item>
            <div className={styles.divider} />
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Password can not be empty!' },
              ]}
              hasFeedback
            >
              <Input.Password
                bordered={false}
                placeholder="Please Enter Password"
                prefix={
                  <img
                    src={passwordImg}
                    style={{ width: 18, marginRight: 10 }}
                  />
                }
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              name="ConfirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Confirm Password can not be empty!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!',
                      ),
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                bordered={false}
                placeholder="Please Confrm Password"
                prefix={
                  <img
                    src={passwordImg}
                    style={{ width: 18, marginRight: 10 }}
                  />
                }
                autoComplete="off"
              />
            </Form.Item>
            <div className={styles.divider} />
            <Form.Item name="type" label="Register Type">
              <Radio.Group value={userType} onChange={onUserTypeChange}>
                <Radio.Button value="0">Doctor</Radio.Button>
                <Radio.Button value="1">Patient</Radio.Button>
                <Radio.Button value="2">Admin</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <div className={styles.divider} />
            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                shape="round"
                onClick={() => {
                  registerHook();
                }}
                block
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.divider} />
          <div>
            Already have an account?
            <Button
              type="link"
              onClick={() => {
                history.push('/login');
              }}
            >
              Sign in
            </Button>
          </div>
        </div>

        <div className={styles.copyright}>
          CS542
          {/* {info.updateDate} */}
        </div>
      </div>
    </div>
  );
};

// ????????????
export default Create;
