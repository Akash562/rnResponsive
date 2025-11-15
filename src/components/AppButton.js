import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme, Radius, Spacing, FontSizes, fontType } from '../utils/theme';
import AppText from './AppText';

const AppButton = ({
    children,
    onPress,
    style,
    textStyle,
    variant = 'primary', // 'primary', 'secondary', 'outline'
    size = 'medium', // 'small', 'medium', 'large'
    loading = false,
    disabled = false,
    ...props
}) => {
    const { colors } = useTheme();

    const getButtonStyle = () => {
        const baseStyle = {
            borderRadius: Radius.md,
            paddingVertical: Spacing.md,
            paddingHorizontal: Spacing.lg,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        };

        const sizeStyles = {
            small: {
                paddingVertical: Spacing.sm,
                paddingHorizontal: Spacing.md,
            },
            medium: {
                paddingVertical: Spacing.md,
                paddingHorizontal: Spacing.lg,
            },
            large: {
                paddingVertical: Spacing.lg,
                paddingHorizontal: Spacing.xl,
            },
        };

        const variantStyles = {
            primary: {
                backgroundColor: colors.accent,
            },
            secondary: {
                backgroundColor: colors.success,
            },
            outline: {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.accent,
            },
        };

        return [
            baseStyle,
            sizeStyles[size],
            variantStyles[variant],
            (disabled || loading) && {
                opacity: 0.6,
            },
            style,
        ];
    };

    const getTextColor = () => {
        if (variant === 'outline') {
            return colors.textPrimary;
        }
        return colors.textPrimary;
    };

    const getTextSize = () => {
        const sizeMap = {
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[size] || 'medium';
    };

    return (
        <TouchableOpacity
            style={getButtonStyle()}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator
                    color={getTextColor()}
                    size="small"
                />
            ) : (
                <AppText
                    style={[
                        {
                            color: getTextColor(),
                            fontSize: FontSizes[getTextSize()],
                            fontFamily: fontType.Bold,
                        },
                        textStyle,
                    ]}
                >
                    {children}
                </AppText>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;

