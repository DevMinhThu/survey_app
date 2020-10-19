import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screen
import WelcomeScreen from '../pages/Welcome/WelcomeScreen';
import LoginScreen from '../pages/Login/LoginScreen';
import RegisterScreen from '../pages/Register/RegisterScreen';

// custom hidden header of Stack
const navOptionHandler = () => ({
  headerShown: false,
});

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={navOptionHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
