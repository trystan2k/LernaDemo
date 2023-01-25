import { Text, TextProps } from '@lerna-demo/Text';
import { ColorsInterface, MarginProps } from '@lerna-demo/theme';
import { Wrapper } from './Tag.styles';
import { type SpecificSizes, CustomizableIcon } from '@lerna-demo/icon';

interface WrapperProps {
  hasWhiteBgColor?: boolean;
  className?: string;
  children: any;
}

interface IconProps {
  iconProps?: {
    icon: string;
    iconSize?: SpecificSizes;
  };
}

interface TagTextProps {
  tagTextProps?: Pick<TextProps['fontConfig'], 'fontSize' | 'weight' | 'fontColor'>;
}

const Colors = [
  'success',
  'warning',
  'information',
  'danger',
  'bGamerBlack',
  'bGamerMagenta',
  'bGamerBlue',
  'generic',
] as const;

export type ColorOptions = (typeof Colors)[number];

interface ColorProps {
  color?: ColorOptions;
}

export type TagProps = TagTextProps & WrapperProps & IconProps & ColorProps & MarginProps;

type ColorStyle = {
  [key in ColorOptions]: {
    color: keyof ColorsInterface;
    background: keyof ColorsInterface;
  };
};

function generateStylesWithColor(color: any) {
  const styles: ColorStyle = {
    success: {
      color: 'jade',
      background: 'success',
    },
    warning: {
      color: 'brownText',
      background: 'danger',
    },
    information: {
      color: 'blueText',
      background: 'info',
    },
    danger: {
      color: 'crimson',
      background: 'error',
    },
    generic: {
      color: 'anthracite',
      background: 'gray1Background',
    },
    bGamerBlue: {
      color: 'white',
      background: 'mediumBlueBGamer',
    },
    bGamerBlack: {
      color: 'white',
      background: 'anthracite',
    },
    bGamerMagenta: {
      color: 'white',
      background: 'darkMagentaBGamer',
    },
  };

  return styles[color];
}

export const Tag = ({ color, iconProps, hasWhiteBgColor, tagTextProps, className, children, ...props }: TagProps) => {
  const styles = generateStylesWithColor(color);

  return (
    <Wrapper
      backgroundColor={styles.background}
      color={styles.color}
      hasWhiteBgColor={hasWhiteBgColor}
      className={className}
      {...props}>
      {!!iconProps?.icon && (
        <CustomizableIcon
          size={iconProps?.iconSize || 'dimension16'}
          content={iconProps?.icon}
          marginRight="dimension8"
        />
      )}
      <Text
        fontConfig={{
          fontColor: styles.color,
          weight: tagTextProps?.weight,
          fontSize: tagTextProps?.fontSize || 'size12',
        }}>
        {children}
      </Text>
    </Wrapper>
  );
};
