import { FOUNDATIONS } from '../foundations';
import { THEME_1 } from '../theme1';
import { THEME_2 } from '../theme2';

describe('Theme', () => {
  test('should have the foundations props defined', async () => {
    expect(FOUNDATIONS).toHaveProperty('colors');
    expect(FOUNDATIONS).toHaveProperty('spacing');
    expect(FOUNDATIONS).toHaveProperty('shadow');
    expect(FOUNDATIONS).toHaveProperty('border');
    expect(FOUNDATIONS).toHaveProperty('outline');
    expect(FOUNDATIONS).toHaveProperty('typography');
  });

  test('should have the theme 1 props defined', async () => {
    expect(THEME_1).toHaveProperty('colors');
  });

  test('should have the theme 2 props defined', async () => {
    expect(THEME_2).toHaveProperty('colors');
  });
});
