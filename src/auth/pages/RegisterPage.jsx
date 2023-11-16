import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Space, Typography } from 'antd';
import { AuthLayout } from '../layout/AuthLayout';
import { startCreatingUserWithEmailPassword } from '../../store/auth'

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const onFinish = (values) => {
    const displayName = values.displayName;
    const email = values.email;
    const password = values.password;
    dispatch (startCreatingUserWithEmailPassword({ email, password, displayName }));
  };

  const initialValues = {
    displayName: "John Doe",
    email: "johndoe@example.com",
    password: "123456"
  };

  return (
    <AuthLayout title="Register">
      <Form
        name="register"
        onFinish={ onFinish }
        validateMessages={ validateMessages }
        initialValues={ initialValues }
      >
        <Form.Item
          name="displayName"
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
)};