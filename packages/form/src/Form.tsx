import { Input } from '@ssweet/input';
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ButtonsWrapper = styled.div`
  text-align: right;
`;

export interface LoginFormProps {
  onClick?: () => void;
}

export const LoginForm: React.SFC<LoginFormProps> = ({ onClick }) => {
  const test = 'hello';
  console.log(test);
  return (
    <Wrapper>
      <Input id="name" label="Name" />
      <Input id="password" label="Password" />

      <ButtonsWrapper>
        <button onClick={onClick}>Log in</button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
