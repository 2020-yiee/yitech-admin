import React, { useState } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { useRouter } from 'next/router';

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async data => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <Layout.Content className="rounded bg-white p-8 shadow">
      <Form name="basic" onFinish={handleSubmit}>
        <img
          className="m-auto mb-8"
          src="/login.svg"
          width="85%"
          alt="Login Banner"
        />

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input size="large" type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="large" placeholder="Enter your password" />
        </Form.Item>

        {error && (
          <span className="block mb-4 text-red-600 text-center">{error}</span>
        )}

        <Form.Item>
          <Button
            loading={loading}
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
};
