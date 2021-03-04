import React, { useState } from 'react';
import styled from 'styled-components';

import PageLayout from 'components/common/PageLayout';
import { Input } from 'components/common';

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onChange={handleInputChange}>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          type="text"
          name="username"
          placeholder="Username"
        />
        <Input
          value={formFields.password}
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form>
    </PageLayout>
  );
};

export default Login;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  color: black;
  border-radius: 5px;
`;
