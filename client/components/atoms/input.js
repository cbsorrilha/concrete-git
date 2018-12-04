import React from 'react';
import styled from 'styled-components';

const Input = ({ ...props }) => <input {...props} />;

const InputUI = styled(Input)`
  font-size: 1rem;
  width: 100%;
  background-color: #fdfdfd;
  padding: 0.5rem 0.3rem;
  border: solid #6a93db 0.05rem;
  border-radius: 3px;
  &:focus,
  &:hover {
    border-color: #2f65c4;
    outline: none;
  }
`;

export default InputUI;
