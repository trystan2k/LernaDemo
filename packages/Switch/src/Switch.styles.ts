import { styled } from '@lerna-demo/theme';
import { rem } from 'polished';

/* Todos los numeros que no son multiplos de ocho y se encuentran
en estos estilos, estan confirmados con disenio y asi los han decidido
para que el Switch se vea correcto esteticamente */
interface Props {
  className?: string;
  disabled?: boolean;
}

export const SwitchWrapper = styled.label<Props>`
  display: block;
  position: relative;
  padding-left: ${props => rem(props.theme.sizes.dimension80)};
  height: ${props => rem(props.theme.sizes.dimension32)};
  /* TODO: cuando contesten con la información del label actualizar esto */
  color: ${props => (props.disabled ? props.theme.colors.gray2Border : props.theme.colors.anthracite)};

  ${props => props.theme.font.size16()};

  cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};
`;

export const StyledSwitch = styled.span<Props>`
  position: absolute;
  top: ${rem(2)};
  left: ${rem(2)};

  height: ${props => rem(props.theme.sizes.dimension32)};
  width: ${props => rem(props.theme.sizes.dimension64)};

  background: ${props => props.theme.colors.gray2Border};
  opacity: ${props => props.disabled && '0.4'};
  box-sizing: border-box;

  border-radius: ${props => rem(props.theme.sizes.dimension32)};
`;

export const InputSwitch = styled.input.attrs(p => ({
  disabled: p.disabled,
}))<Props>`

  position: absolute;
  opacity: 0;
  left: ${props => rem(props.theme.sizes.dimension4)};

  cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};

  &:focus {
    outline: none;
  }

  & ~ ${StyledSwitch} {
      &::after {
        display: block;
        content: '';
        position: absolute;

        top: ${rem(2)}; 
        left: ${rem(2)}; 
        height: ${rem(28)}; 
        width: ${rem(28)}; 
        border-radius: 50%;
        box-sizing: border-box;
        background: ${props => props.theme.colors.white};
      }
    }
  &:checked ~ ${StyledSwitch} {
    background: ${props => props.theme.colors.anthracite};
      &::after {
        left: auto;
        right: ${rem(2)}; 
      }
    }
  }
}
`;
