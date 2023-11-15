import { Link } from 'react-router-dom';
import { Button, Form, Input, Space } from 'antd';
import {
  GoogleOutlined
} from '@ant-design/icons';
import { AuthLayout } from '../layout/AuthLayout';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

export const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onGoogleSignIn = () => {
    console.log('Google Sign In');
  }

  return (
    <AuthLayout title="Login">
      <Form
        form={ form }
        name="login"
        onFinish={ onFinish }
        validateMessages={ validateMessages }
      >
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
          <Input autoComplete='on' />
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
              Login
            </Button>
        </Form.Item>
        <Form.Item>
            <Button
            onClick={ onGoogleSignIn }
            type="primary"
            icon={<GoogleOutlined />}
            >
              Google
            </Button>
        </Form.Item>
        </Space>
      </Form>
      <Space>
      <Link to="/auth/register">
        Crear una cuenta
      </Link>
      </Space>
    </AuthLayout>
  );

};