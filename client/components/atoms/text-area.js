import React from 'react';
import styled from 'styled-components';

export const Textarea = props => <TextareaUI {...props} />;

const TextareaUI = styled.textarea`
  width: 100%;
`;

export default Textarea;
