import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const ForgotPassword = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            Alert.alert("Success", "Password reset email sent!");
            navigation.navigate("SignIn");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button title="Send Reset Email" onPress={handleForgotPassword} />
            <Text
                style={styles.link}
                onPress={() => navigation.navigate("SignIn")}
            >
                Back to Sign In
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    link: {
        marginTop: 10,
        color: 'blue',
        textAlign: 'center',
    },
});
