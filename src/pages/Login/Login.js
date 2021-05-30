import React, { useState } from 'react';
import AccountContainer from '../../components/AccountContainer/AccountContainer';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import { API } from '../../config';
import { useHistory } from 'react-router-dom';
import Input from '../../components/AccountContainer/components/Input';

function Login(props) {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handelLogin = e => {
    e.preventDefault();
    const { email, password } = inputs;
    if (isValid) {
      fetch(`${API.SIGNIN}`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            alert('로그인 되었습니다.');
            localStorage.setItem('token', res.data.token);
            history.push('/');
          } else if (res.status === 'INVALID_USER_ERROR') {
            alert('가입되지 않은 유저입니다.');
          } else if (res.status === 'UNAUTHORIZATION_ERROR') {
            alert('비밀번호가 일치하지 않습니다.');
          }
        });
    } else {
      alert('이메일 주소 또는 비밀번호를 확인해주세요.');
    }
  };

  const { email, password } = inputs;
  const isValid = email.includes('@', '.') && password.length >= 8;
  return (
    <AccountContainer type="signup">
      <form>
        <Input
          value={email}
          name="email"
          onChange={handleInput}
          type="text"
          autocomplete="email"
          autocapitalize="off"
          placeholder="이메일 주소 입력"
        />
        <Input
          value={password}
          name="password"
          type="password"
          autocomplete="current-password"
          autocapitalize="off"
          onChange={handleInput}
          placeholder="비밀번호 입력"
        />
        <StyledButton
          onClick={handelLogin}
          color="red"
          fontWeight="700"
          disabled={!isValid}
          fullWidth
        >
          로그인
        </StyledButton>
      </form>
    </AccountContainer>
  );
}

const StyledButton = styled(Button)`
  height: 52px;
  font-size: 16px;
`;

export default Login;
