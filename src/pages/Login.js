import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PageLayout from 'components/common/PageLayout';
import { Button, Input, PasswordInput, Spinner } from 'components/common';

let timeout;

const Login = () => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              type="text"
              name="username"
              placeholder="Username"
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
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

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
  /* Referencing a styled component within another styled component */
  ${Button}:first-of-type {
    margin-top: 20px;
  }
`;
