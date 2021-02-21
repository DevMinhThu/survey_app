import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {Root} from 'popup-ui';

// screen
import WelcomeScreen from '../pages/Welcome/WelcomeScreen';
import LoginScreen from '../pages/Login/LoginScreen';
import RegisterScreen from '../pages/Register/RegisterScreen';
import SurveyScreen from '../pages/Survey/SurveyScreen';
import HomeSurvey from '../pages/Home/HomeSurvey';
import CustomDrawerContent from '../components/DrawerContent/Drawer';
import Profile from '../pages/Profile/Profile';
import NotifyScreen from '../pages/Notify/NotifyScreen';
import SetupScreen from '../pages/Setup/SetupScreen';
import OnboardingScreen from '../components/OnboardingScreen/OnboardingScreen';
import SurveyList from '../pages/SurveyList/SurveyList';

// custom hidden header of Stack
const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

// Stack of Home
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeSurvey}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          headerTitle: () => {
            return (
              <View style={styles.containerTitleHeader}>
                <Feather name="file-text" size={20} color="#3d475a" />
                <Text style={styles.titleHeader}>Survey</Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
        }}
      />
      <StackHome.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => {
            return (
              <View style={styles.containerTitleHeader}>
                <Feather name="user" size={20} color="#3d475a" />
                <Text style={styles.titleHeader}>Profile</Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
        }}
      />
      <StackHome.Screen
        name="Settings"
        component={SetupScreen}
        options={{
          headerTitle: () => {
            return (
              <View style={styles.containerTitleHeader}>
                <Feather name="settings" size={20} color="#3d475a" />
                <Text style={styles.titleHeader}>Settings</Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Notification" component={NotifyScreen} />
      <Stack.Screen
        name="SurveyList"
        component={SurveyList}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

//Handle TabNavigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = focused ? 'reader' : 'reader-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1c2732',
        inactiveTintColor: 'gray',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#f6f6f4',
        },
        adaptive: 'true',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="SurveyList"
        component={SurveyList}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: '#ff6666',
            color: '#fff',
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            backgroundColor: '#ff6666',
            color: '#fff',
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer
const Drawer = createDrawerNavigator();

//Handle Drawer
function DrawerNavigator({navigation}) {
  return (
    <Root>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerStyle={styles.drawerStyle}
        drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="SurveyScreen" component={SurveyScreen} />
      </Drawer.Navigator>
    </Root>
  );
}

// Router Main
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: () => {
                return (
                  <View style={styles.containerTitleHeader}>
                    <Feather name="key" size={20} color="#3d475a" />
                    <Text style={styles.titleHeader}>Login</Text>
                  </View>
                );
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="HomeStack"
            component={DrawerNavigator}
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

  drawerStyle: {
    backgroundColor: '#fff',
  },

  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#3d475a',
  },

  containerTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
