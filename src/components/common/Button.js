import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  /* width: 200px; */
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.25em;
        `
      : css`
          padding: 8px;
          border-radius: 5px;
          font-size: 1em;
        `}

  &:disabled {
    background: #eee;
    color: #667;
  }
`;
