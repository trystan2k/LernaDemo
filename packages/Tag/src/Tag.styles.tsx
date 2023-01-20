import { rem } from 'polished';
import { styled, ColorsInterface, MarginProps, marginsCss, css } from '@lerna-demo/theme';

interface Props {
  backgroundColor?: keyof ColorsInterface;
  color?: keyof ColorsInterface;
  hasWhiteBgColor?: boolean;
}

export const Wrapper = styled.div<Props & MarginProps>`
  ${marginsCss}
  ${props => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: fit-content;
    padding-top: ${rem(props.theme.sizes.dimension4)};
    padding-right: ${rem(props.theme.sizes.dimension8)};
    padding-bottom: ${rem(props.theme.sizes.dimension4)};
    padding-left: ${rem(props.theme.sizes.dimension8)};
    border-radius: ${rem(props.theme.sizes.dimension4)};
    background-color: ${props.theme.colors[props.hasWhiteBgColor ? 'white' : props.backgroundColor].toString()};

    path {
      fill: ${props.theme.colors[props.color].toString()};
    }
  `}
`;
