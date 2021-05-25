import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './components/Button';
import Input from './components/Input';
import { Link } from 'react-router-dom';

function Login(props) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const isValid = email.includes('@', '.') && password.length >= 6;

  const handleInput = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handelLogin = (e, props) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (email.includes('@', '.') && password.length >= 6) {
      fetch('http://10.58.2.241:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            alert('로그인 되었습니다.');
            localStorage.setItem('access_token', res.access_token);
            props.history.push('/');
          }
        });
    } else {
      alert('이메일 주소 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      <Container>
        <h1>로그인</h1>
        <SocialLogin>
          <Button>
            <i class="fab fa-facebook"></i>
            페이스북 아이디로 로그인
          </Button>
          <Button>
            <i class="fas fa-comment-dots"></i>
            카카오 아이디로 로그인
          </Button>
          <Button>
            <i class="fab fa-apple"></i>
            애플 아이디로 로그인
          </Button>
        </SocialLogin>
        <Divider>
          <span>또는</span>
        </Divider>
        <FormContainer>
          <Input
            name="email"
            onChange={handleInput}
            type="text"
            placeholder="이메일 주소 입력"
          />
          <Input
            name="password"
            type="password"
            onChange={handleInput}
            placeholder="비밀번호 입력"
          />
          <Button
            onClick={handelLogin}
            color="red"
            fontWeight="700"
            disabled={!isValid}
          >
            로그인
          </Button>
        </FormContainer>
        <CreateAccount>
          아직 떡볶닷컴 계정이 없으신가요?
          <Link to="/signup">가입하기</Link>
        </CreateAccount>
        <LineDivider />
        <FindAccount>
          <Link to="forgot-password">혹시 비밀번호를 잊으셨나요?</Link>
        </FindAccount>
      </Container>
      <Footer>© 2021 Tumblbug Inc.</Footer>
    </>
  );
}

const Container = styled.main`
  text-align: center;
  padding: 32px 16px 0px 16px;
  margin: 0px 0px 34px;

  ${({ theme }) => theme.tablet` 
    width: 400px;
    padding-bottom: 1rem;
    margin: 130px auto 12px;
    border-radius: 5px;
    border: 1px solid rgb(228, 228, 228);
  `};

  a {
    color: rgb(39, 163, 255);
    text-decoration: underline;
  }

  h1 {
    margin: 0px 0px 32px;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.025em;
    text-align: left;
  }
`;

const SocialLogin = styled.div`
  ${({ theme }) => theme.flexColumnSet};
  i {
    font-size: 1.4rem;
    margin-right: 6px;
  }

  [class$='facebook'] {
    color: #1877f2;
  }

  [class$='dots'] {
    color: #391a1c;
  }

  [class$='apple'] {
    color: #3d3d3d;
  }
`;

const Divider = styled.div`
  padding: 10px 0px;
  overflow: hidden;
  text-align: center;

  span {
    position: relative;
    padding: 16px;
    color: rgb(158, 158, 158);
    font-size: 13px;

    &::before {
      content: '';
      position: absolute;
      border-bottom: 1px solid rgb(228, 228, 228);
      top: 50%;
      right: 100%;
      width: 5000px;
    }

    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px solid rgb(228, 228, 228);
      top: 50%;
      left: 100%;
      width: 5000px;
    }
  }
`;

const LineDivider = styled(Divider)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1rem;
`;

const FormContainer = styled.form``;

const CreateAccount = styled.div`
  ${({ theme }) => theme.flexSet()};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
  margin: 20px 0px 0px;
  color: rgb(109, 109, 109);

  & a {
    margin-left: 0.5rem;
  }
`;

const FindAccount = styled.div`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
`;

const Footer = styled.div`
  font-size: 11.2px;
  color: rgb(117, 117, 117);
  text-align: center;
  padding: 0px 0px 20px;
`;

export default Login;
