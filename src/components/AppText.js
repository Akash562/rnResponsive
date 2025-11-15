import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme, FontSizes, fontType } from '../utils/theme';

const AppText = ({
    children,
    style,
    size = 'medium',
    type = 'Regular',
    color,
    ...props
}) => {
    const { colors } = useTheme();

    const textColor = color || colors.textPrimary;
    const fontSize = typeof size === 'string' ? FontSizes[size] : size;
    const fontFamily = fontType[type] || fontType.Regular;

    return (
        <Text
            style={[
                styles.text,
                {
                    color: textColor,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        // Base text styles
    },
});

export default AppText;

