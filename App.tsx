import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Form from './src/components/Form';
import Final from './src/components/Final';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ title: 'Formulário' }} />
        <Stack.Screen name="Final" component={Final} options={{ title: 'Tela Final' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
