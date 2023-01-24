import { rem } from 'polished';
import { styled, ColorsInterface, MarginProps, marginsCss } from '@lerna-demo/theme';

interface Props {
  backgroundColor?: keyof ColorsInterface;
  color?: keyof ColorsInterface;
  hasWhiteBgColor?: boolean;
}

export const Wrapper = styled.div<Props & MarginProps>`
  ${marginsCss}

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
  padding-top: ${props => rem(props.theme.sizes.dimension4)};
  padding-right: ${props => rem(props.theme.sizes.dimension8)};
  padding-bottom: ${props => rem(props.theme.sizes.dimension4)};
  padding-left: ${props => rem(props.theme.sizes.dimension8)};
  border-radius: ${props => props.theme.sizes.dimension4};
  background-color: ${props =>
    props.theme.colors[props.hasWhiteBgColor ? 'white' : props.backgroundColor ?? 'black'].toString()};

  path {
    fill: ${props => props.theme.colors[props.color ?? 'black'].toString()};
  }
`;
