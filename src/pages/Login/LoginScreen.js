import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './StyleLogin';
import {Root, Popup} from 'popup-ui';

import {firebaseApp} from '../../constants/FirebaseConfig';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('surveyonline@gmail.com');
  const [password, setPassword] = useState('123456');

  const handleLogin = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomeStack');
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        Popup.show({
          type: 'Warning',
          title: 'Login unsuccessful',
          button: true,
          textBody: 'Wrong account or password!',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        });
      });
  };

  return (
    <Root>
      <View style={styles.container}>
        <Text style={styles.titleWelcomeBack}>Welcome Back!</Text>
        <Text style={{fontSize: 16, marginTop: 20, color: 'gray'}}>
          Sign in to continue
        </Text>

        {/* Input username and password */}
        <TextInput
          style={styles.styleInput}
          placeholder="Username"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        {/* button login */}
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.styleButton} onPress={handleLogin}>
            <Text style={styles.textButton}>Login Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginTop: 20}}>Login with phone number?</Text>
          </TouchableOpacity>

          {/* social media */}
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

          <View style={styles.createAcc}>
            <Text style={{color: 'gray'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Root>
  );
}
