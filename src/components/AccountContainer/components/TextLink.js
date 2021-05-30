import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TextLink({ type, children }) {
  return (
    <Container>
      {type.desc}
      <Link to={`/${type.url}`}>{type.link}</Link>
      {children}
    </Container>
  );
}

const Container = styled.div`
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

export default TextLink;
