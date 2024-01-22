import styled from 'styled-components';

export const HeaderBox = styled.div`
  align-items: center;
  height: 44px;
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  svg,
  a {
    cursor: pointer;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
  }

  a: hover,
  svg: hover {
    opacity: 0.5;
  }

  a: hover {
    text-decoration: underline;
  }
`;
