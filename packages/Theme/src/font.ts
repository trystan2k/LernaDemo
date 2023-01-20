import { rem } from 'polished';
import { css, FlattenSimpleInterpolation } from '../index';
import { sizes } from './size';

export enum FontFamily {
  BASE = 'Manrope, sans-serif',
}

export type TextFontWeight = 'REGULAR' | 'MEDIUM' | 'SEMIBOLD' | 'BOLD';

export type FontTypeVariants = 'size10' | 'size12' | 'size14' | 'size16' | 'size20' | 'size24' | 'size28';

export enum FontWeight {
  REGULAR = 400,
  MEDIUM = 500,
  SEMIBOLD = 600,
  BOLD = 700,
}
export interface TypiValue {
  size: number;
  lineHeight: number;
  letterSpacing: number | null;
  family: FontFamily;
  weight?: FontWeight;
}

interface TypiConfig {
  [size: string]: TypiValue;
}
export const typi: TypiConfig = {
  size10: {
    size: 10,
    lineHeight: sizes.dimension16,
    letterSpacing: null,
    family: FontFamily.BASE,
  },
  size12: {
    size: 12,
    lineHeight: sizes.dimension16,
    letterSpacing: null,
    family: FontFamily.BASE,
  },
  size14: {
    size: 14,
    lineHeight: sizes.dimension24,
    letterSpacing: null,
    family: FontFamily.BASE,
  },
  size16: {
    size: 16,
    lineHeight: sizes.dimension24,
    letterSpacing: null,
    family: FontFamily.BASE,
  },
  size20: {
    size: 20,
    lineHeight: sizes.dimension32,
    letterSpacing: 0.5,
    family: FontFamily.BASE,
  },
  size24: {
    size: 24,
    lineHeight: sizes.dimension40,
    letterSpacing: 0.6,
    family: FontFamily.BASE,
  },
  size28: {
    size: 28,
    lineHeight: sizes.dimension48,
    letterSpacing: null,
    family: FontFamily.BASE,
  },
};

type FontName = (fontWeight?: FontWeight | TextFontWeight) => FlattenSimpleInterpolation;

export interface FontInterface {
  size10: FontName;
  size12: FontName;
  size14: FontName;
  size16: FontName;
  size20: FontName;
  size24: FontName;
  size28: FontName;
}
export const font: FontInterface = {
  size10: generateFontSize(typi.size10),
  size12: generateFontSize(typi.size12),
  size14: generateFontSize(typi.size14),
  size16: generateFontSize(typi.size16),
  size20: generateFontSize(typi.size20),
  size24: generateFontSize(typi.size24),
  size28: generateFontSize(typi.size28),
};

export function generateFontSize(value: TypiValue) {
  return (fontWeight: FontWeight | TextFontWeight = FontWeight.REGULAR) => css`
    font-weight: ${typeof fontWeight === 'string' ? FontWeight[fontWeight] : fontWeight};
    font-family: ${value.family};
    font-size: ${rem(value.size)};
    line-height: ${value.lineHeight / value.size};
    ${!!value.letterSpacing && `letter-spacing: ${value.letterSpacing}px`};
  `;
}
