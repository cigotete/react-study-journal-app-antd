import { Link } from 'react-router-dom';
import { Button, Form, Input, Space, Typography } from 'antd';
import { AuthLayout } from '../layout/AuthLayout';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const onFinish = (values) => {
  console.log(values);
};

export const RegisterPage = () => (
    <AuthLayout title="Register">
      <Form
        name="register"
        onFinish={ onFinish }
        validateMessages={ validateMessages }
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            placeholder="input password"
            autoComplete='off'
          />
        </Form.Item>
        <Space>
        <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
        </Form.Item>
        </Space>
      </Form>
      <Space>
      <Typography>Already have an account?: </Typography>
      <Link to="/auth/login">
        Login
      </Link>
      </Space>
    </AuthLayout>
);