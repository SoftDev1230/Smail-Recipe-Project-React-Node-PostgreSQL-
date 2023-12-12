import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
const EditRecipe = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Layout>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
              remember: true,
          }}
          onFinish={onFinish}
          style={{
            maxWidth: 400,
        }}
      >
          <Form.Item
              name="username"
              rules={[
                  {
                      required: false,
                      message: 'Please input your Username!',
                  },
              ]}
          >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Recipe Name" />
          </Form.Item>
          <Form.Item
              name="password"
              rules={[
                  {
                      required: true,
                      message: 'Please input your Password!',
                  },
              ]}
          >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password" />
          </Form.Item>
          <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                  Forgot password
              </a>
          </Form.Item>

          <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
              </Button>
              Or <a href="">register now!</a>
          </Form.Item>
          </Form>
    </Layout>
  );
};
export default EditRecipe;