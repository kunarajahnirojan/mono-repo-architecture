import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LayoutsProps {}

const StyledLayouts = styled.div`
  color: pink;
`;

export function Layouts(props: LayoutsProps) {
  return (
    <StyledLayouts>
      <h1>Welcome to Layouts!</h1>
    </StyledLayouts>
  );
}

export default Layouts;
