import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './StyleWelcome';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 300}}
        source={require('../../assets/images/login.png')}
      />
      <Text style={styles.titleWelcome}>Survey Online</Text>
      <Text style={styles.titleDetail}>Welcome to Login App Survey Online</Text>

      {/* button login and sign in */}
      <View style={styles.stylesDetail}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignIn}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* login with social media */}
      <Text style={{fontSize: 16, marginTop: 10}}>Or via social media</Text>
      <View style={styles.containerSocialMedia}>
        <TouchableOpacity style={styles.buttonFB}>
          <Text style={styles.textSocialMedia}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Text style={styles.textSocialMedia}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInstagram}>
          <Text style={styles.textSocialMedia}>In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
