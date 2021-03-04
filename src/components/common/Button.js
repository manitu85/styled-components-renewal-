import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Interpolating functions to clean up style logic
const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.25em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 5px;
      font-size: 1em;
    `;
  }
};

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
  ${largeStyles}
  &:disabled {
    background: #eee;
    color: #667;
  }
`;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool
};

/* ${(props) =>
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
        `} */
