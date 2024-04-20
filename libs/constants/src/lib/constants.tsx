import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConstantsProps {}

const StyledConstants = styled.div`
  color: pink;
`;

export function Constants(props: ConstantsProps) {
  return (
    <StyledConstants>
      <h1>Welcome to Constants!</h1>
    </StyledConstants>
  );
}

export default Constants;
