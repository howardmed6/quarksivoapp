import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import Home from './src/screens/Home/Home';
import Footer from './src/components/Footer/Footer';
import PngToJpgScreen from './src/screens/PngToJpg/PngToJpg';
import { globalStyles } from './src/styles/globalStyles';

const Stack = createStackNavigator();

// Componente Layout reutilizable que pasa las props de navegación
const Layout = ({ children, showHeader = true, showFooter = true, navigation, route }) => {
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="#1f2937" barStyle="light-content" />
      {showHeader && <Header navigation={navigation} route={route} />}
      {/* Clonamos el children pasándole las props de navegación */}
      {React.cloneElement(children, { navigation, route })}
      {showFooter && <Footer navigation={navigation} route={route} />}
    </View>
  );
};

// Pantalla Home con Layout
const HomeScreen = ({ navigation, route }) => (
  <Layout navigation={navigation} route={route}>
    <Home />
  </Layout>
);

// Pantalla PngToJpg sin Layout (usa el header de React Navigation)
const PngToJpgScreenWrapper = ({ navigation, route }) => (
  <PngToJpgScreen navigation={navigation} route={route} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="PngToJpg"
          component={PngToJpgScreenWrapper}
          options={{
            headerShown: true,
            headerTitle: 'PNG a JPG',
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* Aquí puedes agregar fácilmente más pantallas siguiendo el mismo patrón */}
        {/*
        <Stack.Screen
          name="JpgToPng"
          component={JpgToPngScreenWrapper}
          options={{
            headerShown: true,
            headerTitle: 'JPG a PNG',
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;