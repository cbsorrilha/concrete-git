import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import Button from '../atoms/button';

const renderFormItem = child => <FormItem key={child.props.name}>{child}</FormItem>;

const Form = ({ children, btnText, justifyBtn = 'center', isSubmiting, ...props }) => (
  <FormUi {...props}>
    <FlexContainer direction="column">
      {Array.isArray(children) ? children.map(renderFormItem) : renderFormItem(children)}
    </FlexContainer>
    <FlexContainer direction="column" justify={justifyBtn}>
      <FormItem>
        <FormBtn variant="primary" disabled={isSubmiting} padding=".5rem 2rem" type="submit">
          {btnText}
        </FormBtn>
      </FormItem>
    </FlexContainer>
  </FormUi>
);

const FormBtn = styled(Button)`
  max-width: 150px;
  max-height: 75px;
`;

const FormUi = styled.form`
  width: 100%;
`;

const FormItem = styled(FlexItem)`
  width: 100%;
  margin-bottom: 25px;
`;

export default Form;
