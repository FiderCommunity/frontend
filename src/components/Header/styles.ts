import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.ul`
  background: #e5e5e5;
  font-weight: 500;
  color: #312e38;
  
  list-style-type: none;
  overflow: hidden;

  border-bottom: 0.5px solid #312e38;
  margin: 0 2.5% 0 2.5%;
`;

export const LeftOptions = styled.div`
  float: left;
  padding: 14px 16px;
  color: #312e38;
`;

export const RightLink = styled.a`
  float: right;
  
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: #312e38;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.05, '#e5e5e5')};
  }
`;