import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fadeAnim = new Animated.Value(0);

  // Fade-in animation
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/monki.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Bem-vindo à Diretoria</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                placeholderTextColor="white"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholderTextColor="white"
              />
            </View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    width: '90%', // Adjust width to make form responsive
    maxWidth: 300, // Optional: limit maximum width for better readability on larger screens
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to make content more readable
    padding: 16,
    borderRadius: 8,
    //alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
    
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderColor: 'white',
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;