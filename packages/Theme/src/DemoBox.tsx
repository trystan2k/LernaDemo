import { styled } from '../index';
import { rem } from 'polished';

interface Props {
  bottom?: boolean;
  backgroundColor?: boolean;
}

export const DemoBox = styled.div<Props>`
  margin-bottom: ${p => p.bottom && rem(p.theme.sizes.dimension16)};

  ${p => p.theme.media.desktop`
    background-color: ${p.backgroundColor && p.theme.colors.blueText};`};
`;
