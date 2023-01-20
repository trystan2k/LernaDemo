import { styled, css } from '@lerna-demo/theme';

export const StyledButton = styled.button`
  ${props =>
    css`
      ${props.type == 'button' ? `color: ${props.theme.colors.white}` : `color: ${props.theme.colors.brownText}`};
      cursor: pointer;
      background: ${props.theme.colors.primary[500]};

      font-size: ${props.theme.typography.base.fontSize};
      padding: ${props.theme.spacing[4]} ${props.theme.spacing[16]};
      border: ${props.theme.border.width.sm} solid ${props.theme.colors.primary[600]};
      border-radius: ${props.theme.border.radius.md};
      transition: all 0.3s ease 0s;

      &:hover:not([disabled]) {
        background: ${props.theme.colors.primary[500]};
        border: ${`${props.theme.border.width.sm} solid ${props.theme.colors.primary[500]}`};
        transform: scale(1.1);
        box-shadow: ${props.theme.shadow['md-dark']};
      }

      &:active:not([disabled]) {
        background: ${props.theme.colors.primary[600]};
        border: ${`${props.theme.border.width.sm} solid ${props.theme.colors.primary[600]}`};
        transform: scale(0.9);
        box-shadow: ${props.theme.shadow['sm']};
      }

      &:focus:not([disabled]) {
        outline: ${`${props.theme.outline.sm} solid ${props.theme.colors.primary[300]}`};
      }

      &[disabled] {
        background: ${props.theme.colors.basil};
        border: ${`${props.theme.border.width.sm} solid ${props.theme.colors.brownText}`};
        color: ${props.theme.colors.blueText};
        cursor: not-allowed;
      }
    `}
`;
