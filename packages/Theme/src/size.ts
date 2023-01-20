export const BASE_SIZE = 8; // px

/* TODO: reemplazar nombre del enum por Dimen? */
export enum Size {
  DIMENSION_0 = 0,
  DIMENSION_4 = BASE_SIZE / 2,
  DIMENSION_8 = BASE_SIZE,
  DIMENSION_16 = BASE_SIZE * 2,
  DIMENSION_24 = BASE_SIZE * 3,
  DIMENSION_32 = BASE_SIZE * 4,
  DIMENSION_40 = BASE_SIZE * 5,
  DIMENSION_48 = BASE_SIZE * 6,
  DIMENSION_56 = BASE_SIZE * 7,
  DIMENSION_64 = BASE_SIZE * 8,
  DIMENSION_80 = BASE_SIZE * 10,
}

export type SizeName =
  | 'dimension0'
  | 'dimension4'
  | 'dimension8'
  | 'dimension16'
  | 'dimension24'
  | 'dimension32'
  | 'dimension40'
  | 'dimension48'
  | 'dimension56'
  | 'dimension64'
  | 'dimension80';

export interface SizesInterface {
  dimension0: Size;
  dimension4: Size;
  dimension8: Size;
  dimension16: Size;
  dimension24: Size;
  dimension32: Size;
  dimension40: Size;
  dimension48: Size;
  dimension56: Size;
  dimension64: Size;
  dimension80: Size;
  scale: (factor: number) => number;
}

export const sizes = {
  dimension0: Size.DIMENSION_0,
  dimension4: Size.DIMENSION_4,
  dimension8: Size.DIMENSION_8,
  dimension16: Size.DIMENSION_16,
  dimension24: Size.DIMENSION_24,
  dimension32: Size.DIMENSION_32,
  dimension40: Size.DIMENSION_40,
  dimension48: Size.DIMENSION_48,
  dimension56: Size.DIMENSION_56,
  dimension64: Size.DIMENSION_64,
  dimension80: Size.DIMENSION_80,
  scale: (factor: number) => factor * BASE_SIZE,
};
