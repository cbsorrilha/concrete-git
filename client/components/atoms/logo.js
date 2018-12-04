import React from 'react';
import styled from 'styled-components';

const Logo = () => <LogoTemporary>Logo</LogoTemporary>;

const LogoTemporary = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  padding: 10px;
  text-align: center;
  background-color: #e8f2f9;
  border-color: #d3d5d9;
  border-width: 1px;
  margin: 0 auto;
  font-size: 16px;
  vertical-align: center;
  display: flex;
  align-items: center;
  border-radius: 100%;
`;

export default Logo;
