import { css } from '../index';
import { rem } from 'polished';
import { breakpoints } from './breakpoints';
import { SizeName, sizes } from './size';

export interface MarginProps {
  marginTop?: SizeName;
  marginRight?: SizeName;
  marginBottom?: SizeName;
  marginLeft?: SizeName;
}

export interface MarginPropsDesktopAndUltraWide {
  marginTopDesktop?: SizeName;
  marginRightDesktop?: SizeName;
  marginBottomDesktop?: SizeName;
  marginLeftDesktop?: SizeName;
}

export const marginsCss = css`
  margin-top: ${props => props.marginTop && rem(sizes[props.marginTop])};
  margin-right: ${(p: MarginProps) => p.marginRight && rem(sizes[p.marginRight])};
  margin-bottom: ${(p: MarginProps) => p.marginBottom && rem(sizes[p.marginBottom])};
  margin-left: ${(p: MarginProps) => p.marginLeft && rem(sizes[p.marginLeft])};
`;
export const marginsCssDesktopAndUltraWide = css`
  @media (min-width: ${breakpoints.desktop}px) {
    margin-top: ${(p: MarginPropsDesktopAndUltraWide) => p.marginTopDesktop && rem(sizes[p.marginTopDesktop])};
    margin-right: ${(p: MarginPropsDesktopAndUltraWide) => p.marginRightDesktop && rem(sizes[p.marginRightDesktop])};
    margin-bottom: ${(p: MarginPropsDesktopAndUltraWide) => p.marginBottomDesktop && rem(sizes[p.marginBottomDesktop])};
    margin-left: ${(p: MarginPropsDesktopAndUltraWide) => p.marginLeftDesktop && rem(sizes[p.marginLeftDesktop])};
  }
`;
