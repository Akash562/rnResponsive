import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { useTheme, Radius, Spacing, FontSizes, fontType } from '../utils/theme';
import AppText from './AppText';

const AppInputText = ({
    label,
    placeholder,
    value,
    onChangeText,
    style,
    inputStyle,
    labelStyle,
    error,
    errorText,
    secureTextEntry = false,
    multiline = false,
    numberOfLines = 1,
    ...props
}) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, style]}>
            {label && (
                <AppText
                    style={[
                        styles.label,
                        { color: colors.textPrimary },
                        labelStyle,
                    ]}
                    size="medium"
                    type="Medium"
                >
                    {label}
                </AppText>
            )}
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: colors.background,
                        borderColor: error ? colors.danger : colors.border,
                        color: colors.textPrimary,
                        fontSize: FontSizes.medium,
                        fontFamily: fontType.Regular,
                        borderRadius: Radius.md,
                        paddingVertical: multiline ? Spacing.md : Spacing.sm,
                        minHeight: multiline ? numberOfLines * 20 : undefined,
                    },
                    inputStyle,
                ]}
                placeholder={placeholder}
                placeholderTextColor={colors.textSecondary}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                numberOfLines={numberOfLines}
                {...props}
            />
            {error && errorText && (
                <AppText
                    style={[
                        styles.errorText,
                        { color: colors.danger },
                    ]}
                    size="small"
                >
                    {errorText}
                </AppText>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    label: {
        marginBottom: Spacing.xs,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: Spacing.md,
        textAlignVertical: 'top',
    },
    errorText: {
        marginTop: Spacing.xs,
    },
});

export default AppInputText;

