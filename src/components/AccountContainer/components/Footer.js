import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <StyledFooter>© 2021 Tteokbok:) Inc.</StyledFooter>;
}

const StyledFooter = styled.div`
  font-size: 11.2px;
  color: rgb(117, 117, 117);
  text-align: center;
  padding: 0px 0px 20px;
`;

export default Footer;
