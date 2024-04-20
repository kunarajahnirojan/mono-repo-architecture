import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
`;

const Container = styled(FlexContainer)`
  padding: 4px;
  border-bottom: 1px solid black;
  justify-content: space-between;
  align-items: center;
`;

const CompanyLogo = styled.img`
  width: 20px;
  height: 10px;
  :hover {
    cursor: pointer;
  }
`;

const LogoContent = styled(FlexContainer)`
  flex-direction: row;
  gap: 4;
  align-items: center;
`;

const RightContent = styled(FlexContainer)`
  flex-direction: row;
  gap: 4;
  align-items: center;
  justify-content: center;
`;

export const Header: React.FC<{
  logoUrl?: string;
}> = ({ logoUrl }) => {
  return (
    <Container>
      <LogoContent>
        <CompanyLogo src={logoUrl ?? 'assets/images/ia-black.svg'} />
      </LogoContent>
      <RightContent></RightContent>
    </Container>
  );
};
