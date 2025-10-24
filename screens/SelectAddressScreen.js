import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { FontSizes, Spacing, Radius, scale } from "../utils/metrics";
import { useTheme } from "../utils/theme";

export default function SelectAddressScreen() {
    const [selectedAddress, setSelectedAddress] = useState("Home");
    const { colors, theme, toggleTheme } = useTheme();

    const addresses = [
        {
            id: "Home",
            title: "Home",
            address: "Sonkh Rd, Rdhika Vihar, Mathura, Uttar Pradesh 281001, India",
            phone: "+233 5486 953 262",
        },
        {
            id: "Restaurant",
            title: "Restaurant",
            address: "Sonkh Rd, Rdhika Vihar, Mathura, Uttar Pradesh 281001, India",
            phone: "+233 5486 953 262",
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Header */}
            <View style={styles.header}>
                {/* <Ionicons name="chevron-back" size={scale(22)} color={colors.textPrimary} /> */}
                <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
                    Select Delivery Address
                </Text>

                <Switch
                    value={theme === "dark"}
                    onValueChange={toggleTheme}
                    thumbColor={theme === "dark" ? colors.accent : "#f4f3f4"}
                    trackColor={{ false: "#ccc", true: colors.success }}
                />
            </View>

            {/* Address list */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={[
                        styles.locationButton,
                        { backgroundColor: colors.locationBg, borderColor: colors.border },
                    ]}
                >
                    <Text style={[styles.locationText, { color: colors.textPrimary }]}>
                        Use Current Location
                    </Text>
                    {/* <Ionicons name="locate" size={scale(20)} color={colors.danger} /> */}
                </TouchableOpacity>

                {addresses.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.addressCard,
                            { borderColor: colors.border, backgroundColor: colors.background },
                            selectedAddress === item.id && {
                                borderColor: colors.success,
                                backgroundColor: colors.accentLight,
                            },
                        ]}
                        onPress={() => setSelectedAddress(item.id)}
                    >
                        <View style={styles.addressHeader}>
                            {/* <Ionicons name="location-outline" size={scale(20)} color={colors.success} /> */}
                            <Text style={[styles.addressTitle, { color: colors.textPrimary }]}>
                                {item.title}
                            </Text>
                        </View>
                        <Text style={[styles.addressText, { color: colors.textSecondary }]}>
                            {item.address}
                        </Text>
                        <Text style={[styles.phoneText, { color: colors.textSecondary }]}>
                            {item.phone}
                        </Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={[styles.addNewBtn, { borderColor: colors.accent }]}>
                    <Text style={[styles.addNewText, { color: colors.textPrimary }]}>
                        Add New Address +
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity
                style={[styles.continueBtn, { backgroundColor: colors.accent }]}
            >
                <Text style={[styles.continueText, { color: colors.textPrimary }]}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Spacing.xl * 2.5,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Spacing.lg,
        marginBottom: Spacing.md,
    },
    headerTitle: {
        fontSize: FontSizes.large,
        fontWeight: "600",
    },
    scrollContainer: {
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.xl,
    },
    locationButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: Spacing.md,
        borderRadius: Radius.md,
        borderWidth: 1,
        marginBottom: Spacing.md,
    },
    locationText: {
        fontWeight: "600",
        fontSize: FontSizes.medium,
    },
    addressCard: {
        borderWidth: 1,
        borderRadius: Radius.lg,
        padding: Spacing.md,
        marginBottom: Spacing.sm,
    },
    addressHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: Spacing.xs,
    },
    addressTitle: {
        marginLeft: Spacing.sm,
        fontWeight: "600",
        fontSize: FontSizes.medium,
    },
    addressText: {
        fontSize: FontSizes.small,
        marginBottom: 3,
    },
    phoneText: {
        fontSize: FontSizes.small,
    },
    addNewBtn: {
        borderWidth: 1,
        borderRadius: Radius.md,
        padding: Spacing.md,
        alignItems: "center",
        marginTop: Spacing.md,
        marginBottom: Spacing.lg * 2,
    },
    addNewText: {
        fontWeight: "600",
        fontSize: FontSizes.medium,
    },
    continueBtn: {
        paddingVertical: Spacing.md,
        alignItems: "center",
    },
    continueText: {
        fontWeight: "700",
        fontSize: FontSizes.large,
    },
});
