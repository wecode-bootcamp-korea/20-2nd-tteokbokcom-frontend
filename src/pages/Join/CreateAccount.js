import React, { useState } from 'react';
import Container from '../../components/AccountContainer/components/Container';
import SocialBtnGroup from '../../components/AccountContainer/components/SocialBtnGroup';
import Title from '../../components/AccountContainer/components/Title';
import Input from '../../components/AccountContainer/components/Input';
import styled from 'styled-components/macro';
import Button from '../../components/Button/Button';
import Divider from '../../components/AccountContainer/components/Divider';
import { Link, useHistory } from 'react-router-dom';
import Section from '../../components/AccountContainer/components/Section';
import { API } from '../../config';

function CreateAccount() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [secondaryInput, setSecondaryInput] = useState({
    secondaryEmail: '',
    secondaryPassword: '',
  });
  const [isChecks, setIsChecks] = useState({
    all: false,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleTextInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSecondaryInput = e => {
    const { name, value } = e.target;
    setSecondaryInput({
      ...secondaryInput,
      [name]: value,
    });
  };

  const handleCheckInput = e => {
    const { name, checked } = e.target;
    setIsChecks({
      ...isChecks,
      [name]: checked,
    });
  };

  const allCheck = () => {
    const { check1, check2, check3 } = isChecks;
    const isChecked = check1 && check2 && check3;
    if (!isChecked) {
      setIsChecks({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
      });
    } else if (!check1 || !check2 || !check3) {
      setIsChecks({
        ...isChecks,
        all: false,
      });
    } else {
      setIsChecks({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
      });
    }
  };

  const handleSignUp = () => {
    if (username && email && password && isEqual && isChecked) {
      fetch(`${API.SIGNUP}`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            alert('회원가입 성공했습니다.');
            history.push('/signin');
          } else if (res.status === 'DUPLICATED_ENTRY_ERROR') {
            alert('이미 가입된 이메일입니다.');
          } else if (res.status === 'INVALID_DATA_ERROR') {
            alert('형식을 확인해주세요.');
          }
        });
    }
  };

  const { username, email, password } = inputs;
  const { secondaryEmail, secondaryPassword } = secondaryInput;
  const { check1, check2, check3, check4 } = isChecks;
  const isEqual = email === secondaryEmail && password === secondaryPassword;
  const isChecked = check1 && check2 && check3;

  return (
    <Container>
      <Styledform>
        <Title title="이메일로 가입하기" />
        <Section title="이름" input>
          <Input
            value={username}
            name="username"
            onChange={handleTextInput}
            type="text"
            placeholder="사용하실 이름을 입력해주세요."
          />
        </Section>
        <Section title="이메일 주소" input>
          <Input
            value={email}
            name="email"
            onChange={handleTextInput}
            type="email"
            placeholder="이메일 주소를 입력해주세요."
          />
          <Input
            value={secondaryEmail}
            name="secondaryEmail"
            onChange={handleSecondaryInput}
            type="email"
            placeholder="이메일 주소를 입력해주세요."
          />
          {email !== secondaryEmail && (
            <ErrorMsg>이메일이 일치하지 않습니다.</ErrorMsg>
          )}
        </Section>
        <Section title="비밀번호" input>
          <Input
            value={password}
            name="password"
            onChange={handleTextInput}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Input
            value={secondaryPassword}
            name="secondaryPassword"
            onChange={handleSecondaryInput}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          {password !== secondaryPassword && (
            <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
          )}
        </Section>
        <Section title="전체동의" checkbox>
          <Input
            name="all"
            type="checkbox"
            onChange={allCheck}
            checked={isChecked}
          />
        </Section>
        <StyledHr />
        <Section title="텀블벅 이용 약관동의" checkbox>
          <Input
            name="check1"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check1}
          />
        </Section>
        <Section title="개인정보 수집, 이용 동의" checkbox>
          <Input
            name="check2"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check2}
          />
        </Section>
        <Section title="만 14세 이상입니다." checkbox>
          <Input
            name="check3"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check3}
          />
        </Section>
        <Section title="마케팅 정보 수집 동의(선택)" checkbox>
          <Input
            name="check4"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check4}
          />
        </Section>
        <StyledButton
          type="button"
          color={isEqual && isChecked ? 'red' : 'blue'}
          fullWidth
          disabled={!(isEqual && isChecked)}
          onClick={handleSignUp}
        >
          가입하기
        </StyledButton>
      </Styledform>
      <StyledLink>
        이미 떡볶닷컴 계정이 있으신가요?
        <Link to="/signin">기존 계정으로 로그인하기</Link>
      </StyledLink>
      <Divider />
      <SocialBtnGroup text="가입하기" />
    </Container>
  );
}

const Styledform = styled.form`
  font-size: 13px;
  [type='checkbox'] {
    width: 20px;
    height: 20px;
  }
`;

const ErrorMsg = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  padding-left: 4px;
`;

const StyledButton = styled(Button)`
  height: 52px;
`;

const StyledHr = styled.div`
  margin: 0 0 1rem 0px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border}; ;
`;

const StyledLink = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
  margin: 20px 0px 0px;
  color: rgb(109, 109, 109);

  & a {
    margin-left: 0.5rem;
  }
`;

export default CreateAccount;
