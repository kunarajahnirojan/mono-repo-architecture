import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProvidersProps {}

const StyledProviders = styled.div`
  color: pink;
`;

export function Providers(props: ProvidersProps) {
  return (
    <StyledProviders>
      <h1>Welcome to Providers!</h1>
    </StyledProviders>
  );
}

export default Providers;
