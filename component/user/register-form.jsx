import React, { useState } from 'react';
import { Form, Input, Button, Layout, Typography } from 'antd';

const items = [
  { key: 'email', display: 'email' },
  { key: 'full_name', display: 'full name' },
  { key: 'web_url', display: 'web url' },
  { key: 'username', display: 'username' },
  { key: 'password', display: 'password', isPassword: true },
];

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async data => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout.Content className="rounded bg-white p-8 shadow">
      <Typography.Title level={4} className="text-center">
        Register
      </Typography.Title>
      <Form name="basic" onFinish={handleSubmit}>
        {items.map(({ key, display, isPassword }, index) => (
          <Form.Item
            key={key}
            name={key}
            rules={[
              { required: true, message: `Please input your ${display}!` },
            ]}
          >
            {isPassword ? (
              <Input.Password
                placeholder={`Enter your ${display}`}
                size="large"
              />
            ) : (
              <Input placeholder={`Enter your ${display}`} size="large" />
            )}
          </Form.Item>
        ))}

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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
};
