import styled from 'styled-components';

export const ShadowBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  border-radius: 6px;
  border: 1px solid #f5f5f5;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(40, 40, 83, 0.25) 0px 50px 100px -20px,
    rgba(245, 245, 245, 0.1) 0px 1px 1px 0px inset;
`;

export const ShadowButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border-radius: 4px;
  box-shadow:
    whitesmoke 0 0 0 1.5px inset,
    rgba(193, 193, 193, 0.4) 0 2px 4px,
    rgba(193, 193, 193, 0.3) 0 7px 13px -3px,
    #c1c1c1 0 -3px 0 inset;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition:
    box-shadow 0.15s,
    transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-family: 'Dejavu-Condensed';
  font-size: 14px;
  color: whitesmoke;

  &:hover {
    box-shadow:
      rgba(193, 193, 193, 0.4) 0 4px 8px,
      rgba(193, 193, 193, 0.3) 0 7px 13px -3px,
      #c1c1c1 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #c1c1c1 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const H3Highlight = styled.h3`
  letter-spacing: 5px;
  font-size: 20px;
`;
