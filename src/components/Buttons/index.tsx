import styled from 'styled-components';
import colors from '../../config/colors';

const theme: any = {
  primary: {
    background: `${colors.SECONDARY_COLOR}`,
    color: `${colors.WHITE}`,
    border_color: `${colors.SECONDARY_COLOR}`,
    hover_color: `${colors.SECONDARY_COLOR}`,
    stroke_color: `${colors.WHITE}`,
    stroke_hover: `${colors.SECONDARY_COLOR}`,
    background_hover: `${colors.WHITE}`,
    border_hover_color: `${colors.SECONDARY_COLOR}`
  },
  white: {
    background: `${colors.WHITE}`,
    color: `${colors.BLACK_COLOR}`,
    border_color: `${colors.WHITE}`,
    hover_color: `${colors.SECONDARY_COLOR}`,
    stroke_color: `${colors.WHITE}`,
    stroke_hover: `${colors.SECONDARY_COLOR}`,
    background_hover: `${colors.WHITE}`,
    border_hover_color: `${colors.WHITE}`
  }
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${props => theme[props.theme].background};
  border-radius: 3px;
  color: ${props => theme[props.theme].color} !important;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border: 1px solid ${props => theme[props.theme].border_color};
  transition: all 100ms ease-in-out;
  max-width: 100%;
  position: relative;
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  img, svg {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-right: 12px;
    transition: all 100ms ease-in-out;
    stroke: ${props => theme[props.theme].stroke_color};
    fill: ${props => theme[props.theme].stroke_color};
  }

  > span {
    vertical-align: middle;
  }

  &:hover {
    background-color: ${props => theme[props.theme].background_hover};
    color: ${props => theme[props.theme].hover_color} !important;
    border-color: ${props => theme[props.theme].border_hover_color};

    svg {
      stroke: ${props => theme[props.theme].stroke_hover};
    }
  }
`;

Button.defaultProps = {
  theme: 'primary'
}

export default Button;
