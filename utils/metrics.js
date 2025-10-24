import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

// Example: Slightly different font scaling for Android
export const FontSizes = {
    small: moderateScale(12 * (Platform.OS === "android" ? 0.95 : 1)),
    medium: moderateScale(14 * (Platform.OS === "android" ? 0.95 : 1)),
    large: moderateScale(16 * (Platform.OS === "android" ? 0.95 : 1)),
    xlarge: moderateScale(18 * (Platform.OS === "android" ? 0.95 : 1)),
    title: moderateScale(20 * (Platform.OS === "android" ? 0.95 : 1)),
};

// Spacing and Radius (shared for both)
export const Spacing = {
    xs: scale(4),
    sm: scale(8),
    md: scale(12),
    lg: scale(16),
    xl: scale(20),
};

export const Radius = {
    sm: scale(6),
    md: scale(8),
    lg: scale(12),
};
