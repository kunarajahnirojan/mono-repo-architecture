import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RouterProps {}

const StyledRouter = styled.div`
  color: pink;
`;

export function Router(props: RouterProps) {
  return (
    <StyledRouter>
      <h1>Welcome to Router!</h1>
    </StyledRouter>
  );
}

export default Router;
