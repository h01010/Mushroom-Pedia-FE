import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.div`
  align-items: center;
  height: 44px;
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  svg {
    cursor: pointer;
  }

  svg: hover {
    opacity: 0.5;
  }
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};

  &: hover {
    opacity: 0.5;
  }
`;
