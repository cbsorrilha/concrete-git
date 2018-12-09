import styled from 'styled-components';

export default styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  ${({ border }) => (!border ? 0 : 'border-radius: 100%')};
  ${({ round }) => (!round ? '' : 'border-radius: 100%')};
`;
