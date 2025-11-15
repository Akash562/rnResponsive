import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Switch, TouchableOpacity } from "react-native";
import { useTheme, Radius, Spacing } from '../utils/theme';
import { AppText, AppButton, AppInputText } from '../components';

export default function SelectAddressScreen() {
    const [selectedAddress, setSelectedAddress] = useState("home-1");
    const [showAddForm, setShowAddForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        title: "",
        fullAddress: "",
        phone: "",
        city: "",
        zipCode: "",
    });
    const { colors, theme, toggleTheme } = useTheme();

    const addresses = [
        {
            id: "home-1",
            title: "Home",
            fullAddress: "1234 Oak Street, Downtown District",
            street: "1234 Oak Street",
            city: "San Francisco",
            state: "CA",
            zipCode: "94102",
            phone: "+1 (415) 555-0123",
            type: "Home",
        },
        {
            id: "work-1",
            title: "Office",
            fullAddress: "5678 Tech Boulevard, Silicon Valley",
            street: "5678 Tech Boulevard",
            city: "Palo Alto",
            state: "CA",
            zipCode: "94301",
            phone: "+1 (650) 555-0456",
            type: "Work",
        },
        {
            id: "other-1",
            title: "Mom's Place",
            fullAddress: "9012 Maple Avenue, Suburban Area",
            street: "9012 Maple Avenue",
            city: "Mountain View",
            state: "CA",
            zipCode: "94040",
            phone: "+1 (408) 555-0789",
            type: "Other",
        },
    ];

    const handleAddAddress = () => {
        if (newAddress.title && newAddress.fullAddress && newAddress.phone) {
            // Here you would typically add the address to your state/API
            console.log("New address:", newAddress);
            setNewAddress({
                title: "",
                fullAddress: "",
                phone: "",
                city: "",
                zipCode: "",
            });
            setShowAddForm(false);
        }
    };

    const handleUseCurrentLocation = () => {
        // Handle current location logic
        console.log("Using current location");
    };

    const handleContinue = () => {
        // Handle continue logic
        console.log("Selected address:", selectedAddress);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Header */}
            <View style={styles.header}>
                <AppText size="title" type="Bold" style={styles.headerTitle}>
                    Select Delivery Address
                </AppText>
                <Switch
                    value={theme === "dark"}
                    onValueChange={toggleTheme}
                    thumbColor={theme === "dark" ? colors.accent : "#f4f3f4"}
                    trackColor={{ false: "#ccc", true: colors.success }}
                />
            </View>

            {/* Scrollable Content */}
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Use Current Location Button */}
                <AppButton
                    variant="outline"
                    size="medium"
                    onPress={handleUseCurrentLocation}
                    style={[
                        styles.locationButton,
                        { borderColor: colors.success }
                    ]}
                >
                    📍 Use Current Location
                </AppButton>

                {/* Address Cards */}
                <AppText 
                    size="medium" 
                    type="Medium" 
                    style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                    Saved Addresses
                </AppText>

                {addresses.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.addressCard,
                            {
                                borderColor: selectedAddress === item.id ? colors.success : colors.border,
                                backgroundColor: selectedAddress === item.id ? colors.accentLight : colors.background,
                            },
                        ]}
                        onPress={() => setSelectedAddress(item.id)}
                        activeOpacity={0.7}
                    >
                        <View style={styles.addressCardHeader}>
                            <View style={styles.addressTypeBadge}>
                                <AppText 
                                    size="small" 
                                    type="Bold"
                                    color={colors.success}
                                >
                                    {item.type}
                                </AppText>
                            </View>
                            {selectedAddress === item.id && (
                                <View style={[styles.selectedIndicator, { backgroundColor: colors.success }]} />
                            )}
                        </View>

                        <AppText 
                            size="large" 
                            type="Bold" 
                            style={styles.addressTitle}
                        >
                            {item.title}
                        </AppText>

                        <AppText 
                            size="medium" 
                            style={[styles.addressText, { color: colors.textSecondary }]}
                        >
                            {item.street}
                        </AppText>

                        <AppText 
                            size="small" 
                            style={[styles.addressText, { color: colors.textSecondary }]}
                        >
                            {item.city}, {item.state} {item.zipCode}
                        </AppText>

                        <View style={styles.phoneContainer}>
                            <AppText 
                                size="small" 
                                style={[styles.phoneText, { color: colors.textSecondary }]}
                            >
                                📞 {item.phone}
                            </AppText>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Add New Address Form */}
                {showAddForm ? (
                    <View style={[styles.addFormContainer, { backgroundColor: colors.locationBg, borderColor: colors.border }]}>
                        <AppText 
                            size="large" 
                            type="Bold" 
                            style={styles.formTitle}
                        >
                            Add New Address
                        </AppText>

                        <AppInputText
                            label="Address Title"
                            placeholder="e.g., Home, Office, etc."
                            value={newAddress.title}
                            onChangeText={(text) => setNewAddress({ ...newAddress, title: text })}
                        />

                        <AppInputText
                            label="Full Address"
                            placeholder="Enter street address"
                            value={newAddress.fullAddress}
                            onChangeText={(text) => setNewAddress({ ...newAddress, fullAddress: text })}
                            multiline
                            numberOfLines={2}
                        />

                        <View style={styles.rowInputs}>
                            <View style={styles.halfInput}>
                                <AppInputText
                                    label="City"
                                    placeholder="City"
                                    value={newAddress.city}
                                    onChangeText={(text) => setNewAddress({ ...newAddress, city: text })}
                                />
                            </View>
                            <View style={styles.halfInput}>
                                <AppInputText
                                    label="Zip Code"
                                    placeholder="Zip"
                                    value={newAddress.zipCode}
                                    onChangeText={(text) => setNewAddress({ ...newAddress, zipCode: text })}
                                />
                            </View>
                        </View>

                        <AppInputText
                            label="Phone Number"
                            placeholder="+1 (555) 123-4567"
                            value={newAddress.phone}
                            onChangeText={(text) => setNewAddress({ ...newAddress, phone: text })}
                            keyboardType="phone-pad"
                        />

                        <View style={styles.formButtons}>
                            <AppButton
                                variant="outline"
                                size="medium"
                                onPress={() => {
                                    setShowAddForm(false);
                                    setNewAddress({
                                        title: "",
                                        fullAddress: "",
                                        phone: "",
                                        city: "",
                                        zipCode: "",
                                    });
                                }}
                                style={styles.cancelButton}
                            >
                                Cancel
                            </AppButton>
                            <AppButton
                                variant="secondary"
                                size="medium"
                                onPress={handleAddAddress}
                                style={styles.saveButton}
                            >
                                Save Address
                            </AppButton>
                        </View>
                    </View>
                ) : (
                    <AppButton
                        variant="outline"
                        size="medium"
                        onPress={() => setShowAddForm(true)}
                        style={[styles.addNewButton, { borderColor: colors.accent }]}
                    >
                        ➕ Add New Address
                    </AppButton>
                )}
            </ScrollView>

            {/* Continue Button */}
            <View style={[styles.footer, { backgroundColor: colors.background }]}>
                <AppButton
                    variant="primary"
                    size="large"
                    onPress={handleContinue}
                    style={styles.continueButton}
                >
                    Continue to Payment
                </AppButton>
            </View>
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
        marginBottom: Spacing.lg,
    },
    headerTitle: {
        flex: 1,
        marginRight: Spacing.md,
    },
    scrollContainer: {
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.xl * 2,
    },
    locationButton: {
        marginBottom: Spacing.lg,
    },
    sectionTitle: {
        marginBottom: Spacing.md,
        marginTop: Spacing.sm,
    },
    addressCard: {
        borderWidth: 2,
        borderRadius: Radius.lg,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addressCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: Spacing.sm,
    },
    addressTypeBadge: {
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xs,
        borderRadius: Radius.sm,
        backgroundColor: "rgba(139, 195, 74, 0.1)",
    },
    selectedIndicator: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
    },
    addressTitle: {
        marginBottom: Spacing.xs,
    },
    addressText: {
        marginBottom: Spacing.xs,
        lineHeight: 20,
    },
    phoneContainer: {
        marginTop: Spacing.sm,
        paddingTop: Spacing.sm,
        borderTopWidth: 1,
        borderTopColor: "rgba(0,0,0,0.05)",
    },
    phoneText: {
        marginTop: Spacing.xs,
    },
    addFormContainer: {
        borderWidth: 1,
        borderRadius: Radius.lg,
        padding: Spacing.lg,
        marginTop: Spacing.md,
        marginBottom: Spacing.lg,
    },
    formTitle: {
        marginBottom: Spacing.lg,
    },
    rowInputs: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInput: {
        width: "48%",
    },
    formButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Spacing.md,
    },
    cancelButton: {
        flex: 0.48,
    },
    saveButton: {
        flex: 0.48,
    },
    addNewButton: {
        marginTop: Spacing.md,
        marginBottom: Spacing.lg,
    },
    footer: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderTopWidth: 1,
        borderTopColor: "rgba(0,0,0,0.05)",
    },
    continueButton: {
        width: "100%",
    },
});
