import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" // Nome do route
          component={LoginScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'green',
              borderBottomWidth: 5,
              borderBottomColor: 'yellow',
            },
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <TouchableOpacity onPress={() => console.log('Ícone pressionado!')}>
                  <Image
                    source={require('../assets/diretoria2.jpg')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerLeft: () => null, // Remover o ícone do lado esquerdo
            headerRight: () => null, // Remover ícones do lado direito, se necessário
          })}
        />
        {/* Adicione outras telas aqui, se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60, // Ajuste o tamanho do ícone conforme necessário
    height: 60, // Ajuste o tamanho do ícone conforme necessário
    borderWidth: 2, // Largura da borda
    borderColor: 'black', // Cor da borda
    borderRadius: 15, // Bordas arredondadas
  },
});

export default App;
