import { styled } from '@lerna-demo/theme';

export const StyledButton = styled.button(
  ({ theme }) => `
    cursor: pointer;
    background: ${theme.colors.primary[500]};
    color: white;
    font-size: ${theme.typography.base.fontSize};
    padding: ${`${theme.spacing[4]} ${theme.spacing[16]}`};
    border: ${`${theme.border.width.sm} solid ${theme.colors.primary[600]}`};
    border-radius: ${theme.border.radius.md};
    transition: all 0.3s ease 0s;

    &:hover:not([disabled]) {
      background: ${theme.colors.primary[500]};
      border: ${`${theme.border.width.sm} solid ${theme.colors.primary[500]}`};
      transform: scale(1.1);
      box-shadow: ${theme.shadow['md-dark']};
    }

    &:active:not([disabled]) {
      background: ${theme.colors.primary[600]};
      border: ${`${theme.border.width.sm} solid ${theme.colors.primary[600]}`};
      transform: scale(0.9);
      box-shadow: ${theme.shadow['sm']};
    }

    &:focus:not([disabled]) {
      outline: ${`${theme.outline.sm} solid ${theme.colors.primary[300]}`};
    }

    &[disabled] {
      background: ${theme.colors.grey[300]};
      border: ${`${theme.border.width.sm} solid ${theme.colors.grey[300]}`};
      color: ${theme.colors.grey[600]};
      cursor: not-allowed;
    }
  `,
);
